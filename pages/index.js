import Head from 'next/head'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(()=>{
  return {
    container:{
      width:'100%',
      height:'100%',
      display:'flex',
      justifyContent:'center',
      alignItems:'center'
    },
    title:{
      margin: '0',
      lineHeight: '1.15',
      fontSize: '48px',
    }
  }
})

export default function Home() {
  const classes = useStyles()
  return (
    <>
      <Head>
        <title>Feminino</title>
        <meta name="description" content="A sports driven website for women" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={classes.container}>
        <h1 className={classes.title}>
          Welcome to <span style={{color:'red'}}>Feminino</span>
        </h1>
      </div>
    </>
  )
}
