export function HelloWorld() {
    const props = {
        text:"Hello World"
    }
  return (
    <div>
        <HeaderHelloWorld {...props}/>
        <ParagraphHelloWorld/>
    </div>
  )
}

export function HeaderHelloWorld({text = "Teks header belum diisi."}) {   
  return (
    <div>
      <h1 style={{
        color:"yellow",
        backgroundColor:"black"
      }}>
        { text.toUpperCase() }
    </h1>
    </div>
  )
}

export function ParagraphHelloWorld() {
    const paragraph = "Selamat belajar react.js"
    const style = {
        color: "red",
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
