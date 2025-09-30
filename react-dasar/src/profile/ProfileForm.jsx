export default function ProfileForm({name, setName}) {
    return(
        <>
            <h1>Profile Form</h1>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </>
    )
}