export function HelloWorld() {
  return (
    <div>
        <HeaderHelloWorld/>
        <ParagraphHelloWorld/>
    </div>
  )
}

export function HeaderHelloWorld() {
    const header = "Hello World"
    
  return (
    <div>
      <h1 style={{
        color:"aliceblue",
        backgroundColor:"black"
      }}>
        { header.toUpperCase() }
    </h1>
    </div>
  )
}

export function ParagraphHelloWorld() {
    const paragraph = "Selamat belajar react.js"
    const style = {
        color: "green",
        backgroundColor: "gray"
    }
  return (
    <div>
      <p style={style}>
        { paragraph.toLowerCase() }
      </p>
    </div>
  )
}
