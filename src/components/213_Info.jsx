import React from 'react'
import userInputs from './213_UserInputs'

export default function Info() {
    const [state, onChage] = userInputs({
        name: '',
        nickName: ''
    })

    const { name, nickName } = state
    return (
        <div>
            <h6>Info</h6>
            <div>
                <input name="name" value={name} onChange={onChage} />
                <input name="nickName" value={nickName} onChange={onChage} />
            </div>

            <div>
                이름: {name}<br />
                닉네임: {nickName}
            </div>
        </div>
    )
}
