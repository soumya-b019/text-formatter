import React from 'react'

function Alert(props) {
    const capitalize = (word)=> {
        const lower = word?.toLowerCase();
        return lower?.charAt(0)?.toUpperCase() + lower?.slice(1);
    }
  return (
        <>
            {/* 
            So, how does props.alert && works
            So, basically what happens is that agar props.alert ki value evaluate
            hokr true aari hai toh && k baad waali cheez evaluate hogi 
            otherwise agar props.alert agar evaluate hokr flase aari hai toh && k baad waali cheez bilkul bhi evaluate nhi hogi
            Basically, it happens bcoz all the JSX will be converted to Javascript calls props.alert && 
            */}
            <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}       
            </div>
        </>
        
  )
}

export default Alert