import React,{useRef,useEffect} from 'react'

const CavasTest1 = () => {
    const canvasRef = useRef(null);
    
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        ctx.beginPath()
        ctx.moveTo(300,300)
        ctx.lineTo(600,600)
        ctx.rect(0,0,200,200)
        ctx.stroke()
    }, []);


  return (
    <canvas ref={canvasRef} width="1500" height="1200" style={{background:'#e3e3e3'}}/>
  )
}

export default CavasTest1