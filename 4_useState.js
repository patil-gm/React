
import { useState } from "react"
import axios from 'axios';
import "./workoutform.css"

const WorkoutForm=()=>{

    const [title,setTitle]=useState('')
    const [load,setLoad]=useState('')
    const [reps,setReps]=useState('')
    const [error,setError]=useState(null)

    const handleSubmit= async(e)=>{
        e.preventDefault();
        const workout = {title,reps,load}
        axios.post('/api/workouts', workout)
        .then(function (response) {
          console.log(response);
          console.log('workout added successfully');
        })
        .catch(function (error) {
          console.log(error);
        });

    }
   
    return(
    <form onSubmit={handleSubmit}>
        <div className="header text-align-center"><strong>ADD NEW WORKOUT</strong></div>
        <div className="mb-3">
            <label htmlFor="title" className="form-label">Workout Title</label>
            <input type="text" className="form-control" id="title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
        </div>
        <div className="mb-3">
            <label htmlFor="load" className="form-label">Load/weight(kg)</label>
            <input type="number" className="form-control" id="load" value={load} onChange={(e)=>setLoad(e.target.value)}/>
        </div>
        <div className="mb-3">
            <label htmlFor="reps" className="form-label">Reps</label>
            <input type="number" className="form-control" id="reps" value={reps} onChange={(e)=>setReps(e.target.value)}/>
        </div>
        <button  className="btn btn-primary"><strong>ADD</strong></button>

        {error && <div className="err">{error}</div>}

    </form>
    )
}

export default WorkoutForm
