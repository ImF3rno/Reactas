import { useState } from "react";

const AddArticle=(props)=>{
    const [formData,setFormData]=useState({
        'title':'',
        'description':'',
        'id':''
    })

    const handeChange=(event)=>{
        setFormData(
            {
                ...formData,
                [event.target.name]:event.target.value
            }
        )
    }

    const submitHandler=(e)=>{
        e.preventDefault();
        formData.id=Math.random();
        props.onSave({...formData})
    }

    console.log(formData)

    return(
        <form className="form" onSubmit={submitHandler}>
            <div className="form-group">
                <input type="text" name="title" placeholder="Naujienos pavadinimas" className="m-1 form-control" onChange={handeChange} value={formData.title}/>
            </div>
            <div className="form-group">
                <textarea name="description" placeholder="Naujienos tekstas" className="m-1 form-control" onChange={handeChange} value={formData.description}/>
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-primary">Saugoti</button>
            </div>
        </form>
    )
}

export default AddArticle