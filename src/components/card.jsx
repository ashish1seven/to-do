export default function Card(props) {
    // object

    return (
        <div className='flex flex-col justify-between h-64 p-4 mb-12 w-72 rounded-xl hover:scale-110 hover:border-2 hover:bg-white hover:border-black bg-cyan-100'>
            <h1>Task {props.data.id}</h1>
            <p className='limit_text'>{props.data.desc}</p>

            <h2 className='mt-3'> {props.data.date} </h2>

            <div className="flex justify-between options">
                {
                    props.data.completed ? <button className='w-32 h-8 bg-green-300 rounded-xl'> Completed </button> : <button className='w-32 h-8 bg-red-300 rounded-xl'> Incomplete </button>
                }
                <i className={`fi fi-rr-icon-star text-2xl ${props.data.fav && "text-red-500"}`}></i>
                <i className="text-2xl fi fi-rs-trash"></i>

            </div>
        </div>
    )
}