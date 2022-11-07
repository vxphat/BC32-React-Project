import {useEffect, useState, useRef} from 'react';
import { useDispatch } from 'react-redux';
import { createUserSelect } from '../action/index';

const UserInfo = () => {
    const [userSelect, setUserSelect] =useState({
        userName: "",
        numberOfSeat: 0,
    });

    const dispatch = useDispatch();
    const inputRef = useRef();

    useEffect(()=>{
        inputRef.current.focus();
    },[]);

    const handleSubmit = (evt) =>{
        evt.preventDefault();

        if(!userSelect.userName || !userSelect.numberOfSeat){
            alert("Vui lòng điền tên và số ghế");
            return;
        }

        dispatch(
            createUserSelect({
                ...userSelect, numberOfSeat: +userSelect.numberOfSeat,
            })
        );
        setUserSelect({userName: "", numberOfSeat: 0});
        
    }

    const handleChange = (evt) =>{
        const {name, value} = evt.target;

        setUserSelect((state)=> ({...state, [name]: value}));
    }


  return (
    <>
        <div className="userInfo">
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="userName">Họ và tên: </label>
                    <input 
                    type="text" 
                    name='userName'
                    placeholder='Vui lòng điền tên của bạn'
                    value={userSelect.userName}
                    onChange={handleChange}
                    ref={inputRef}
                    />
                </div>
                <div>
                    <label htmlFor="numberOfSeat">Số lượng ghế: </label>
                    <input 
                    type="number" 
                    name="numberOfSeat" 
                    id="numberOfSeat" 
                    placeholder='Điền số lượng ghế'
                    min={1}
                    value={userSelect.numberOfSeat}
                    onChange={handleChange}
                    />
                </div>
                <button className='btn btn-secondary'>Bắt đầu chọn ghế</button>
            </form>
        </div>

    </>
  )
}

export default UserInfo