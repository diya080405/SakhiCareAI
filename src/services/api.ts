import { AnalysisResult, ApiResponse, SupportedLanguage } from '../types/health';

export async function analyzeSymptoms(
  symptoms: string,
  language: SupportedLanguage
): Promise<AnalysisResult> {
  const controller = new AbortController();
  // 28-second client timeout to guarantee resolution well within 30 seconds
  const timeoutId = setTimeout(() => controller.abort(), 28000);

  try {
    const response = await fetch('/api/analyze', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        symptoms,
        language,
      }),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    let payload: ApiResponse<AnalysisResult>;
    try {
      payload = await response.json();
    } catch {
      throw new Error('Received an unreadable response from the server. Please click Retry Analysis.');
    }

    if (!response.ok || !payload.success || !payload.data) {
      throw new Error(payload.error || `Analysis could not be completed (status ${response.status}). Please click Retry Analysis.`);
    }

    return payload.data;
  } catch (err: any) {
    clearTimeout(timeoutId);
    if (err.name === 'AbortError') {
      throw new Error('Analysis took longer than 30 seconds. Please click Retry Analysis to run a fast check.');
    }
    throw err;
  }
}

export async function checkServerHealth(): Promise<boolean> {
  try {
    const res = await fetch('/api/health');
    return res.ok;
  } catch {
    return false;
  }
}
