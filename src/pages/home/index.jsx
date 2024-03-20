import { Box, Grid, Paper, PopoverRoot, Stack, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import getProducts from "../../services/getProducts"


const HomePage = () => {
    const [ products , setProducts] = useState([])


    const Products = async ()=>{
        const response = await getProducts()
        console.log("response" ,response?.data)
        if(response?.data){
            setProducts(response?.data)
        }
    }

useEffect(()=>{
    Products()
},[])
    console.log(products)
  return (
   <Stack py={2}>
   
<Grid container columnSpacing={3} rowSpacing={3}>
    {
      products?.map((data)=>(
        <Grid width="100%"  key={data?.id} item xs={12} sm={6} lg={4} xl={3}>

<Stack height="100%" sx={{ boxShadow: "1px 2px 4px rgba(0, 0, 0, 0.1)"  , borderRadius:"8px"}} p={2} spacing={2} width="100%">
    <Box component="img" sx={{aspectRatio:"16/9"}}src={data?.image}/>
  <Typography variant="h6">
    {data?.title}
  </Typography>
  <Typography variant="body2">{data?.description}</Typography>
  <Typography variant="h5">{`$ ${data?.price}`}</Typography>
</Stack>


            </Grid>
      ))
    }

</Grid>

   </Stack>
  )
}

export default HomePage