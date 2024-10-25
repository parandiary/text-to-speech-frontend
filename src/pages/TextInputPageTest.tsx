import { useEffect, useState } from 'react';
import axios from 'axios';

export default function TextInputPage() {
    const [text, setText] = useState('');
    const [audioURL, setAudioURL] = useState<string | null>(null);

    const handleSubmit = async () => {
        try {
            const response = await axios.post('http://localhost:9000/api/tts/convert', 
                { text }, 
                {
                    responseType: 'blob', // Blob 형태로 응답 받기
                }
            );

            // Blob URL 생성
            const blob = new Blob([response.data], { type: 'audio/mpeg' });
            const url = URL.createObjectURL(blob);
            setAudioURL(url); // Blob URL 설정

        } catch (error) {
            console.error('Error submitting text:', error);
        }
    };

    useEffect(() => {
        if (audioURL) {
            console.log('Audio URL:', audioURL);
        }
    }, [audioURL]);

    return (
        <div className="max-w-lg mx-auto mt-10 p-4 shadow-lg rounded-lg bg-white">
            <h1 className="text-2xl font-bold mb-4">Text to Speech</h1>
            <textarea
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={5}
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter text here..."
            />
            <button
                className="mt-4 w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition"
                onClick={handleSubmit}
            >
                Convert to Speech
            </button>

            {audioURL && (
                <div className="mt-6">
                    <audio controls src={audioURL} className="w-full" />
                    <a
                        href={audioURL}
                        download="speech.mp3"
                        className="block mt-2 text-blue-500 underline"
                    >
                        Download Audio
                    </a>
                </div>
            )}
        </div>
    );
}
