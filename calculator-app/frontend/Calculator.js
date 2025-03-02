function Calculator() {
    const [num1, setNum1] = React.useState('');
    const [num2, setNum2] = React.useState('');
    const [result, setResult] = React.useState('Enter numbers and choose operation');

    // Only allow Numbers, Negative sign, and Empty field
    const isValid = (value, setter) => {
        if (value === '' || value === '-') {
            setter(value);
            return;
        }

        const number = Number(value);
        if (!isNaN(number)) {
            setter(value);
        }
    };

    // Send a POST request to the server to perform the operation
    const calculate = async (operator) => {
        try {
            setResult('Calculating...');
            const response = await fetch(`http://localhost:5000/api/${operator}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ 
                    num1: Number(num1) || 0, 
                    num2: Number(num2) || 0 
                })
            });
            const data = await response.json();
            setResult(`Result: ${data.result}`);
        } catch (error) {
            setResult('Error');
        }
    };

    // Calculator UI
    return (
        <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
            <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Calculator</h1>
            
            <div className="space-y-6">
                <div className="space-y-4">
                    <input 
                        type="text"
                        inputMode="numeric"
                        pattern="-?[0-9]*"
                        value={num1}
                        onChange={(e) => isValid(e.target.value, setNum1)}
                        placeholder="First number"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                    <input 
                        type="text"
                        inputMode="numeric"
                        pattern="-?[0-9]*"
                        value={num2}
                        onChange={(e) => isValid(e.target.value, setNum2)}
                        placeholder="Second number"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                </div>

                <div className="flex gap-4">
                    <button 
                        type="button"
                        onClick={() => calculate('add')}
                        className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                    >
                        Add
                    </button>
                    <button 
                        type="button"
                        onClick={() => calculate('subtract')}
                        className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                    >
                        Subtract
                    </button>
                </div>

                <div className="mt-6 p-4 bg-gray-50 rounded-lg text-center font-medium text-gray-700 min-h-[60px] flex items-center justify-center">
                    {result}
                </div>
            </div>
        </div>
    );
}
