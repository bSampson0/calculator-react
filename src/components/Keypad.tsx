import React, { useEffect, useState } from 'react'
import Button from './Button'
import * as math from 'mathjs'
import Display from './Display'

export default function Keypad() {

    const [results, setResults] = useState<string[]>([])
    const [answer, setAnswer] = useState(0)
    const [answered, setAnswered] = useState(false)

    const handleClick = (e: any) => {
        let value = e.target.getAttribute('data-value')

        if (answered) {
            setResults([])
            setAnswered(false)
        }

        if (value)
            setResults(results => [...results, value])
            switch (value) {
                case 'clear': 
                    setResults([])
                    setAnswer(0)
                    setAnswered(true)
                    break
                case '=':
                    calculate()
                    setAnswered(true)
                    break
            }
    }

    const onKeyPress = (e: any) => {
        let value = e.key
        console.log(value)
    }

    const calculate = () => {
        let result = results.join('')
        if (result) {
            result = math.evaluate(result)
            result = math.format(result, { precision: 8 })
            setAnswer(math.evaluate(result))
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', onKeyPress)
    })


    return (
        <div>
            <Display
                problem={results.join(' ') || ''}
                answer={answer.toString() || ''}
            />
            <div className="row">
                <Button onClick={handleClick} onKeyPress={onKeyPress} className="btn-alt" label="C" value="clear" />
                <Button onClick={handleClick} onKeyPress={onKeyPress} className="btn-white" label="x" value="*" />
            </div>
            <div className="row">
                <Button onClick={handleClick} onKeyPress={onKeyPress} label="7" value="7" className="btn-clear" />
                <Button onClick={handleClick} onKeyPress={onKeyPress} label="8" value="8" className="btn-clear" />
                <Button onClick={handleClick} onKeyPress={onKeyPress} label="9" value="9" className="btn-clear" />
                <Button onClick={handleClick} onKeyPress={onKeyPress} className="btn-white" label="/" value="/" />
            </div>
            <div className="row">
                <Button onClick={handleClick} onKeyPress={onKeyPress} label="4" value="4" className="btn-clear" />
                <Button onClick={handleClick} onKeyPress={onKeyPress} label="5" value="5" className="btn-clear" />
                <Button onClick={handleClick} onKeyPress={onKeyPress} label="6" value="6" className="btn-clear" />
                <Button onClick={handleClick} onKeyPress={onKeyPress} className="btn-white" label="+" value="+" />
            </div>
            <div className="row">
                <Button onClick={handleClick} onKeyPress={onKeyPress} label="1" value="1" className="btn-clear" />
                <Button onClick={handleClick} onKeyPress={onKeyPress} label="2" value="2" className="btn-clear" />
                <Button onClick={handleClick} onKeyPress={onKeyPress} label="3" value="3" className="btn-clear" />
                <Button onClick={handleClick} onKeyPress={onKeyPress} className="btn-white" label="-" value="-" />
            </div>
            <div className="row">
                {/* <Button onClick={handleClick} onKeyPress={onKeyPress} label="+-" value="-1" className="btn-clear" /> */}
                <Button onClick={handleClick} onKeyPress={onKeyPress} label="0" value="0" className="btn-clear" />
                <Button onClick={handleClick} onKeyPress={onKeyPress} label="." value="." className="btn-clear" />
                <Button onClick={handleClick} onKeyPress={onKeyPress} className="btn-white" label="=" value="=" />
            </div>
        </div>
    )
}