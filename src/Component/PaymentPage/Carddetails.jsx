import { Box, Button, Center, Heading, Input } from '@chakra-ui/react'
import React from 'react'
import "./PaymentPage.css"
import {useFormik} from "formik";
import { signUpSchema } from './schemas';
// import { signUpSchema } from './schemas/index ';
const Carddetails = ({setcomplete,complete}) => {
  const Formik=useFormik({
    initialValues:{
      card_number:"",
      name_card:"",
      cvv:"",
      country_name:"",
      postcode:"",
    },
    validationSchema:signUpSchema ,
    onSubmit:values=>{
      console.log("clicked")
      console.log(Formik.values+"values...");
      alert(JSON.stringify(values,null,2))
     
    }
   

  })
  // console.log(Formik.errors)
  // function handleclick(){
  //   console.log("clicked");
   
  //   console.log(complete+"complete")
  // }
  // function handleclick(){
  //   console.log("clicked") 
  //   console.log(Formik.values);
  //   alert(JSON.stringify(Formik.values,2,null))
    
  // }
  return (
    <div><div className='order_box'>
       <Box>
      <img className='dressup_img_main_logo' src='https://cdn.shopify.com/s/files/1/0339/0901/files/All-Black-Logo_7_spacing.png?14284'/>
    </Box>
       <Box>
      <Center> <Heading m={4}>Pay with debit or credit Card</Heading></Center>
     <Center><p>We keep your financial information securely encrypted</p>
        </Center> 
       </Box>
       <Center>
       <Box className='images_card_box'>
        <img className='image_card' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYsAAACACAMAAADNjrXOAAAA9lBMVEX///8AV5/6phoAU50AVZ4ASZkAQ5cAUJxUgLQATpsATJoAVJ4AR5j6pA77uV0AT5ulvddAda4MYaX6oQD6nwD2+vz/qgAAVKLc5vDw9fnV4Oy4yt+as9EAUaXO2+m/z+KPq8yettNqkL3m7vVch7h2mMEzbqt/n8VJe7KrwdmLp8obYqUnaKhuk7/7v23+9ef92q3/+/X805zHk0ZEZoz7xHv8zo7+79n7sz/7tUz6rTP92Kj6qyzZ0sXYlSSKfG0cXJdvc3uoh1xncX7ooCjMlUH8yYJSaof94LxbbISUgGi1jFPWmTn8z5P7u2S9j06ZeVQAMpDM7K3LAAAR+klEQVR4nO1daZfbxhEkBYAgQNB7id57yV1ee0qWZEu249hy4it3/P//TEiRy8XRU9U9Qz0nz6lPek9LXDPTXd1d09Nq/S4xPjm9vJ129+7v9tsL3N3vTaa3l8OT49/6wX5fOLmZz/IiybM0iuI4Xg5FO457UZpmeVJk1/Obo9/q0T77xI4XX7z95Z3n/UbXXYy9cfnPJ/iPr8eu+4g4upxkRZ72ViMgIY7SvMi7Zyeer7fAeHg2vXI+9zUY6RcHfQ8cHDzvv/AajizCyK4rf96Bf5xGhjtfzPeLPHIPQ3lAsiK6Oh14vN54dNdZLLnU+cjJpfvHXx4c9J95of/8q5fmZz1NyHdITst/flTAP+7NDN+oSDXjsEGaJ5Oh8e0G0yIjN0kfwO9f/vLimed49J9/ZnzYVjfCjxrvV/58iIcOvlgJF136jSRESWFy5he9HXrN2gs28e7t137D8fwPlmdttY7xPG+3s9vK359l+K/PNDc9nRVkBjg/XGZ5udNCM96K4X33ejEcHoNhcxpnOXn5vOqMpyn880RhRIazxGNJrB9nz/BuQ9VQtJMLzcXevf3GvDj6XxuettW67+EHjbrVv5/hv88p/Rx3dV9IRjrVv9pYRQu0a3mBdy/6xuEwuYwTZqLqEx27izhiVOcsxwuLIAekp46u8k7RRH3JV599+dwyGv2v9I/bmpPnje+qfz8mNOoe324cYJ4+QGMD1xiyafYEwwdbLA6L5zgwEFvmQvPa+r0gNOoK3u0m93TZGxT6UHJPfa/EFp++/KmvHo0DvZEiDHVBW2qPeYldfTZCd5vrZ6rreXL1q5FZU4Zhsa3w6vUz5Wj0v1BfdELmTlo3pcSm5afibVboEsqmgD6UbF3p/dLOSH3VDZSj0f9Se0EaXDToHln4iZtGDWY87KLQhpKLV8v1jqnOFXV4rbJU/VfKy+3iwE1wxThYjlMnjRrMgvjTGmr62RpZFqElifaEV28VDFcd7pFgockgjwmldacTtjIUBsu+b+FrYDlDvHxBR0PrvEmebzHN69kB4hDdTL27BQO1QKH9aIyUVAHdHMQfv/2U2Cil854TE9VkqLt45Tud4DzcbS8RJ9pvdG0iz7WcmwHHne/6cGlooz1mNpqJGk8adRpMZldQ0yi24mswZbmquD5//wYuDZ3zZutYCKLJdEvk4tvxdlYFDSWfwNIJNcSp8rpNjLL4/PtnYGnonDcLLvLdxk+Yr5ezzzaDAYBDyScMrETB13mvPOhhGywNlfMedPDzCQSV0Sg5sUMrh2rkShpF3Jpw4RvdhQUsp+diaTi9hsp535AHFtLTJ4RGyTETEBYYoaVRrBDQQDrXXVjAyrocvncRKpXznpFPJBh/MnwyHWHVqhqWohzXkylp1IWZKrD8MsA6Q9c7/5NrMLjzpsGFwFlucZQgr3RCnDf3i7K8WCBPe9HyH0mSpbXprf1izBEKN29EUmpsvuP5nz8V7ZTCeZPvKn5YolMQaRTJ7D5+iySbnA2PNl9kMD4Zns1nRVLW7CiLPqTGon90HTYR/uH7H6TBOPiFXsJpCNaQaB75jUijFMmIOMumjprzyeUkSx6lOzu6kGykXImVRzfUC2t4Sgj3ej8KdurgJ3YFlt7PBG82IFNcSrEpyghRPoKV2Yt5ezUcylQFm2US1JFLEyUnGktOgztvlt6XKMsRoVHXzZ8w3cgC2R631RdXeRYrDYkXha7Xkg0Yl+93/p0wGOQCA5Lej6SswCleFyIxpOwy15Ukji/3k0Kl4dTXVktoFDANqGS7Fx684bxJzZsFF6I5GGF3nzXjdBaRCJVDN06lddeAMRX1CJ1ISkQ14XL+c30wmPNmk0esrlwRGiW8DpEZukL1AHCjKEJfpWqgltc7/LyWniLOe0ymq8xY7rBdk+QUNOfln3yQMfAU/RhEUnUc14qd9cHofwJ/zqarKH0ZkAKrJHUlnMag61DiErwZehaqcAaoG5nGYMBfkxkuMqLWEfYxUqB+TFT98o1CAMKZGA5G7u+8G350MRhq581Iv1xWZnJ/QepKWLBB16EEerMMWgOzSKp00wZdOPy8vDCg8yb+LY7FXxHDVpcYLsHKVQFWWgbI0ixsKMoB+Iik1hg0ifvhX0ps6uCt6bcVOEo2D0TuL9AoRp3bPe8PIGIMajKL0BoxiRBzKcyA8++fBgM5bxKztTtyIEyqAhKNoonBAFovASU8F0YIr2z/20qvef7X0spw/5SkW12Gg2xnKISfML4mOvwAIKYXET/Jt444IcaX53/bDIbbeY9J/sMxV8d4jovFBToW7dxbDiMAmcQltRigmNxfJCWzt/jw748O3O28SaHNxbSZ3F+iRIjtr5EImRNfIB3khxl2D2ZhQJ1VdkTx+2+o8yZ2X+JDSzC5v/QzjQig8M8+1IA2Wa2SLYh+BIikHAvy8DE15XTeLF3n2tZJiLCo0VBJKZOJzx56AagOsMrqYDG3/2M4ckpPGXTH74iOy1lVIVoFUaPBYr0Vdva3wqagYmj1eNDO+ouknMbv/E0fOm+SIipc34V80I70m4Gus0FcPGxhaSA/uGYWsGwTkqd0GI14/xvkvInZcGotxtgNOwpjbFfBI7LIv+D8CBRVP9az98DzWPYr1+EK2dbx98E/xF+RLLYg3FyByf1l08bUJqUb3/knhD4ATrLH8BU5PcMGtAbqefMNVlFG/5+mH60Q5y5jQfYwOdI5hh2McTILchtItbtRNKIIJI4CGoe5DEDc+8HpvAnLdCdOPeX+FlFGXFz7y5SgKmrzdLC3QBHQo8ppAFZWSnTexIC7H8dP7m8UK0Wdri+ZQRt7SntoEJlw2mcF3Bby/F992XkTkgnSQ2SCizSqtSSatpqn72hAmX/JK6MpFSCSah07Fdzxe4fznvsoYpcYY3bqLlFOrSq+qDPxKLHB7HyJpyNTG/srnNEgHy4ivv6L5i+IotK9J5jJ/Z1FIevCWF6sMzV7UZTYKU8UVC+IswDnDdKgh9/2BedN+pWA9BipCgGpq1Hzv3qQxJikgnytXBuD8qmAOiuarEv3/byh/CfKTbDXxEvuvwJKjroQ5/cmggtfrKJqQQ8TIJKCeYnzH/sN501kGaJwcw0fuf8aY6/mXb2OIQyGHSeqrwXDkJDyOwiie59/evC69ufE0CSgmkJUPB2UT7rxk1Vmd2q+D5lzdc1C7uuvcMaR2/mbg7rzZspN942OWb84+Jhzv92TvUKbpEKUJE4q8wQW+42dpCpA8rHFwqg5bxJc7IDCFpP7k04zE4/tKUskOqMBZf61qAHG5yHOG06I8zc1501iYNSzzEfuX0bXczCymYZmwpxAUfu+H0kkhYuGvZ8Pqtv2sM2Hc5vI/Xnq37eRV7TPw3C4aBtKdsRCgjSlcL6ef1tx3iRnCtcnybQrZE4Pnjvuo5gOBqz+Nja7oWkVB9RZsVDm8PuK88a6Pyy0JjGCprP1yLNBS9wmg4FlkI2YCdY51E2RJEBRR1buGzzAUxv22jgm5TmVFPPUswtn1MYjDcsAzQKRLrnuA1hWOPx3yXmT4AJq3n12TQpXmfk5jRQX3PB0bNJi5DZDRFJ4xcXvS5E3LkDgkJPRKG2IPC+snTo+IENbA7AbTJprCiqcA0RSpGZa/HHzh2RbWJ35VcHk/uoizMWdF7lFGQFIKyRyCF8mDhGk7KGxKE1YHFyQ6J/kFC0h0m3i4TXintNlYHWwNIgfz3nDb1wiR1i56RJursEqs5bUwdG1R65wx2mlbuEc6wnTHLZ5C9rMic3lJmeHG/qTreYD9Ft7i7jhnb2+5JyvsPYrOzKocA7atQbz4JsgDKthyY534mvsquDdtpVRuZ4Qd5yQRZDIw4SIpEhlYdP/BRtpp3BzhS0dklTGWWp04o6FAVPPjgI2UszHWYjzhlr8x8+Epw9rkuUj96c4ywwtx11ZZGx6HfErNOtkWmLgzNjaeeOyHOuexHZNemaaR7lhbcjdKrDpdXAKGAcEdJJqkVY0K+eNG/rTDm+QNxtpVAWjjr57h5R/xNGVMx2AaGGISIqQ/9UbYCPDbj/AOrWQRhKDh4423JCkJngPmpOfwu1JISIpnGhaLTkcXLCMN9s1GUQ9jrRHKElsDaaP3SdAQJ22kDXRAzLOD84b91Si3zLskCSKXV0kLvR+wfzO/VxQeBdUZ8WV96Xzxhpxmk0i2nRtZ2snxjOVD2+yWsxI3IxogNoXB4mk8KdeNobDGQx6Jp7Prkkbpqo9lvX74OanKMWGtieF9SgZQpnJBVvKNOFN5P5B6bQ1RorBaLhirGWM96/3XKCWxBtwA+fCeeNiNe9uyfqphTz7IxSD0TAexOfHAOh3/hR9CciXH1p4KVMWRI6vCCOBG0xopFEntbQJjyfCbC5arPH9jR8J38D7kCQTWEm9ORasOb4vlO2hHcBfCz8zL2T5y/1NoFtea3yNHuvrC7/j9jbAVgj9p9Qru4aQsyYNoI1lazICw8GSVgS9h/8pOIrGCwFyfwtIwapuTS0HSxoRRgx5nyYHNLoHolNLttRZhe6ZqcYXPtudlAhb6d62U3Fbtjs/ZM9CBXQsKgvQdLCkDUEiKXZOKgC/tPeuSSNgYmKJSmt5w0npZgSJpHyOpfkADQciNCpwEj2BnXJUjYe3dk6cdCepA7UennGPZh+Ox67JI5/IlTWFryxA1Pw0HGF0xOeMICWT9pD7n3WmZioyZma2El4YD5Y0IrDjvc/BNLpUPWlPKMn9H9I0nxhr+NToVAbd2z+qENJJquV37IPq8AmyD1nMai7r42kys8yuKTWy5dS++WBJG8IqlbQXswRVEYiEw5KZW0dtvTyea03VFU3TVtyF+WBJI3SnAblw7OHMNLuJfOT+T6qTncXiUNzk5F7Rx7YUCdkPljQisLW3faroIgOy+VU6JKlcu4rz5HoX06qjSaJ49rJK2ZPB6xEmkiJ6awl4y4XyvaUZVJNZRHmyPz11WKvjm71C4+rKYYyPDbAhUE5h6Oy3gvLYKCb3F0xQk0fEaZ4ks4fRzcXJ+PEHg/HFzfyuUG7iK+frfA6WtCE0sWO1obp1yM7KkAZUpqdxL80WI1IURSfJP5yDm+S69rXtmsz8o8YWK6hcqRvWrABsp7IBCSLF1A1P25GKcxPlZbG9s9ndCBNJWVeu0iRCjYks98fiXS9UHtbrYEkjAjVf9IjHKpTadnJqgmTozJ6Loyy+9jxY0obQ7LPJjGq9k8euye3rMypnZLAMQ5opga8TNhYm1q3dBuwh99963i4tx/bsYMl0uqsEHNQwkRTrcl1BrKyM0iK0cBlSHzejuqGYpKJi8UB3EXATUaAw1WJItVvsCI3qSTTKp9cjQFwNJ9mRmXpBzQBdKVRpZCgBa1t3s12TAhkbbNl1FxVryoiBRTeA7G+gSIptqytBnRRmcn9BH2/kcwxJdYISA2gqj6K0UWCd1ZA3VxeumNxfmIU+2Xs3kmo5nR12bdreDJ80UD2vDrLcu6fq8JD7648fUTxobVXQi5uS3fDg5VA5pDZvrtduYBcUS9totpjQjhtNUZnM3xYWwPYVgfoWLbNXrz+y0kS3s72aW5TWiSWzf0b2g1Z96OmkquPsLFosD7k/PKrLhHzWiLeYzN9o5KHFk86XNWCgc5uoM1YVeOuG2M51W+miuGjOcUbRWC+NOvDmukDNti5vLh+VLsFD7r8lGpXcC5+CkXZraRRuXJeqxxaQlr4roF7ZNRA2L5mEbRTd4iyVvipRWTsPHncDXSxQJKVLVxvSXoRGSX1EfFuXl5DltyLnZqce27suo7kWLKBX2ChLxgbbfnHX5OmsUFdOJfTy6NYxvUkqykN6CRexrvDphiJHaigfMholj+rRvF34aizT4n7X9QkoS7QzH3jJUOdNum61beEQqQplTjZ/Mb8vcmsZI06TaAren80zDyHNR3XeRwXaYb5EPtJfDZ2h0iY2YXxz1V6MBzvDZDMOWdGewwQG6dbjpxdAkvAo0Hm37vcJYkPB6roD8StL/oxP53tJkWQpbAoYZUnRvtplYdr0V/w0HZ/grIsuqOf+/ysYD8+me71OkeTZTppGUdyL414vitJ0J8+Tori/Gg3DCpr/hxHjk+HN2e38YdJdtky57l5Nb892hyf/1aPwHw4Zbmh6+FjCAAAAAElFTkSuQmCC'alt='image1'/>
        <img className='image_card' src='data:image/png;base64,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'alt='image1'/>
        <img className='image_card' src='https://cdn-icons-png.flaticon.com/512/179/179431.png'alt='image1'/>
        <img className='image_card' src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUUExcVFBUXFxcXGRkaGBkaFxoaGxwhGhkZGhoYIRobICwjGyAoHRkaJDUlKC0vMjI0GiI4PTgxPCwxMi8BCwsLDw4PHRERHDEpIikxNzEzMTMxMTExPDExMTExPDEzPDExMTEzMTMxMToxMTExOjE9OzExOjE0MTExMTExL//AABEIAKgBLAMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAAAQQFAgMHBgj/xABBEAABAwEGAQcJCAICAwADAAABAgMRAAQSITFBUQUGEyJCYYHwFDIzUnGRscHhByNyc6GistFDgmKSFVPxFiQ1/8QAGgEAAwEBAQEAAAAAAAAAAAAAAAECAwQFBv/EACsRAAICAQMCBAYDAQAAAAAAAAABAhEhAxIxBFETMkFhBSIzcZGhFIHBsf/aAAwDAQACEQMRAD8A7NRRRQBxP7SOXbyn12WzOFtto3VrQYUtQ84XswkHDCJIOkVzg2lZMlRJ9tbuKn7938xf8jUSuuMUkSzb5Qr1jT8oX6xrTRVCNvlCvWNPyhXrGtVOgDb5Qr1jTFoV6xrTTpiN3lCvWNPyhXrGtIoFMDeLQr1jWQfV6xrTQKAN3Pq9Y0+fV6xrTWSRNOhGzn1esafPq9Y1qu4TpQUnDtyooLNvPq9Y0c+r1jWFwzGtIJwnQU6FZs59XrGnz6vWNayMJ3yp3DMRjtRQrM+fV6xo8oV6xrAJz7M6CnCdKKCzZz6vWNHPq9Y1gUHKMTpQEnHsz/8AtFCsz59XrGnz6vWNYXcJ0pFJw7cqKCzbz6vWNMWhXrGtQQZjWgDCdBToVm8WhXrGshaFesa0RgDvlWYQZiMdqaQmzeLQr1jWxNoV6xqMkfpWQymtEZstuG8afYVfacWg6wcD7UnA99dq5HceFtswcICXEkocSMgoQZHYQQe+NK4IAa6n9j3o7T+Nv+Kqw6qEXDdWS9KT3UdIooorzzrCiiigD5R4r6dz8xf8jUWpPFPTu/mL/kajV2LgQVLtvDnGktLcTCXm+cbIIIUmYnDIg5g1Er1llZVbeGIaRi7ZLSlCPy7Yq6O4PR+lDdElRZOT1pc5i42D5TzhZBWlJUGpvqxPRGGBOelVYr3y22bTxtmyFKXLNZ0KsyEnI80y4VHCMecBP+oqs5IWZtyzLDbVmftvOi61aSQFNXcmheSkuFczJmO6luHR5WnXo+BWNz79xVmsaUIcuLXbCsNMqlUsoSFSpXcogJGONauWvDmmLUEshIbcaadCUklAvpkhBViUSJE6GmpZoVFfwrhL9qWUMNlZSJWZCUoG6lqISke06Vu4rwN6zJStzmylZKUqbdQ4JAkg3TIw7KtOKEo4NY0t+Y69aFPR1nEG62lW8IBgH1RUZfJxvyZFoYtIdCnm2FJLCmyhbgvZqV0gPZjS3BRRCprPDXFWdy0C7zba20Kkm9ecxTAiCN8a9UtNjRxAcONjbW1ziLOp03vKStV1HPBwKhMKVN0JiBUJdn5nhvEW5vc1bmkTvzZUme+Ke4KPNsNla0oEStSUicpUQkT2SalW6xLZccZcuy0soWUkkFSdiQJ9wr1NsTZ7Fa2LH5K07d5guvLv86pbhSq82sEBCU3hAggxjVNyw/8A6NrJx+/XdHf/AHprVwlbFJYKgnIkfhT8/GdGM7rOZ28fpQJndRzO3f8APSgARAwTqd+z6VqZgIiBgkecd+z6UycASMOqnft+tBORIw6qd+360Yzus/t+vwoAeM7rOX/H6/CgDMA/iV8vZ8aQGYBw6yvl7PjRIjHBIyGpPjWgQ8I2SMhqT491OcQSJUfNTtth8BRJkEjpHzU7bYfKgDMA49ZW2+PiaBANQDj1laDfH50YRskZ7k+PdRhGyR71Hx7qCciR+FPz9nxoAZORI/Cn5+z408Z3Wczt430pCZ3Wcz6u/wD90oAEQMEjM79n9CmIABEAwkecrfs/oU5wBI6PVTv2/WkTgCRh1U79v1rLGd1nT1fr8KAHjO6zkPV+vwpp1AP4lfL2fGsQMwDh1lfL2fGnIjHBIyGpPjXSmIzBEbJGQ1J8e6sgd89Btth8qwkyCR0uqnbbD5U06gHHrK23xpolm1OwOOp2rqX2P+Zafxt/xVXKxEbJHvJ8e6up/Y9PN2nTpogf6qrLqfpsrSXznSqKKK807AooooA+UOKend/MX/I1GqVxUffO/mL/AJGokV2LggdXHJrlE7YXFuNpQu+i4UrkpkKCkLgdZKhI9tU4FEUNWBYcE4suy2lFpSAtxBWYXMKK0KQomMeuT7a38E4u3ZgkmyNOutrvtOrW4lSSIuylJurAIkA1UEU7pmIx2oqwL6zcplXHW7Qy3aUOvF+FqWi64ZBUCgzdIMXdqicd4wu2OJcWhtCktobAbEJhExCernEDYVWAU41opchZbcH48uzoW0W2nmFkKWy6kqReGAWkgyhcYSK28S5Qc4x5OzZ2rO1zgdIbU4pZWlN0KvrOGHZVLdMxGO1AH6U9quxWenHLBV4PmzMKtYSEi1G/ekJuhZam4XAOv/8AKqUcVWLM7ZyApLzqHVrUSV3kT3GZJM1XxrTj9aFFBZ6RHKxRDSl2Zhx9lKUtWhYUVgI828ibrik6KOWcVWcQt6n33HikJcdWpagJupnOCce+q8CtqBKdkjzjvsPpVQSTE2ZACIGCRmd/G1MnAEjDqp37frSOQJGHVTv2+zt1rKFXoiVnT1frHurUkMZ3Wf2/X4UgMwDh1lfLxnQkYEDLrK+XjOg5SRCNB6x1+p0oEEiNkjIak+NdKyxmSJUck7bYfLvogyJEqMXUxlth8BQkHEDE9ZWgHt+etAgGoBx6ytt8fnrRhGyR71Hx7qIEahAPeo+PdTOhIzi4n25HxnQAE5Ej8Kfn4zp4zus5nbfH56UAGSBivGT6u/1OlIDDDBI85W50H9DvoEAAiBgkecd+z6UycASMOqnft+utInAEjDqp37frrTxndZ/b9fhTAeM7rP7fr8KQGYBw6yvl7PjQBmAcOsr5ez40YRJwSMhqT410oEOREnBIyGqj410rKTIJEqPmp22w+XfWMmQSJUfNTtth8B76YGYBx6ytBvj86AMhqAcesrbfH560xEbJHvUfHurERGyR71Hx7qc5Ej8Kfn4zpiM5yJH4U+PBrqv2OejtMmTfbn/qquUiZ3Ucztv/APdK6r9jcc3aY9dvHfoqrLqfpsrT850uiiivOOoKKKKAPlXivp3Sf/Yu6n/Y4+M6iiZ3Ucztvj86lcU9O7GKi4uTt0jr86iACIGCdTv42rtRmxiIgYJGZ38bUyciRh1U79p8Y0iciRh1U79v11p4zus/t+vwpgGM7rP7fr8KAMwDh1lfL2fGvV8P5DuOMoc55KC4kKi4VYHEdK8MxBipD3IBaUlXlCbqAVXeaVjA3vZ1xv4l0yltcs/Y2/jajV0eNkRJwSMhqo+MzTkyCRKj5qdtsPgPfXtV/Z64CSbQ2SMB92qB3XqquM8lHLM0XedQsSAswpJAUQMJmcTjrVafxDppyUYyy/YUun1Iq2sHnwMwDj1laDcT4mjCNkD3qPj3UsI2QPeo+PdTJyJGPVT8/GddpzmRORI/Cn5+M6Ymd1nM+rvj8+6hCFEkJBUuCVEY3QB0jhlAzOlYiIgGEjNWp7P6HfQBkIiBgkZnU9n9DvraDgFKHRE3Eb7k9m51yFaScASMOqnft+utbkSDhi4ctkDf2x/1pgZ9IK3dPuR8gY7k0kgQUpOH+RzfsGsTpmT2VikCClJ6P+RzfsHZ2damSCASIbE3Uzio6kn4q0yFUIZIIBIIbB6KdVnUk/E6ZCsyTIJEuGLiIwSNMPgO80iSCCRLhi4iMEjTD4J0zNCRmlJkn0jk4AagHbc65UCGkYlKTKjPOOaAagHbc66UsCnVLYP+yz/f6AUYFOqWgf8AZZ/v9EimTkpQE5Nt6AaEjbs6xoEClZKUMf8AG3oBoSNv1J7KyEhRAMuGbypwQNcd9zpkKQkKIBlwzeVOCBrjvudMhSSAQQDDYi8qMVHQAfAd5piGkCCAYbHnKjFR0AHwHeaFKEBShCR5iN+09m51yFJShAUoQn/G3v2ns3OuVZ9IK3dPuR8gQP8ArQIwXevY4rP7f6IHurADMA4dZXy9nxpkDEA4dZe/s7PjSJEScEjIak+NaChyIk4JGQ1J8a05MyRKj5o22w+ApYzJEqOSdtsPl30DUA49ZW2+Pz1oEMDMA49ZW2/jWjCNkD3qPj3UsI2QPeo+PdTJyJGPVT848TQAyciR+FPjT41kJndRzO2+PzrETO6jmdt8fn3UCIgYJGZ1PZ/Q76YjNMRAwSMzv42rq32NH7u04QL7cf8AVVconIkYdVO/b9da6t9jc3LVJxvtz2dFWFY9R9Nl6fmOmUUUV550hRRRQB8qcU9M7oOcXJ1PSOFRSdSMOqn51K4qfvnScucXA/2NRsZ3Uf0+vwrtXBDHjO6z+n1+FYnIgHDrK+XjOmBmAcOsr5eM6SyIk+aJgb+NTT9AOy8GYX5OzC0gc03H3cmLo/51utdoAbcQsQ5cOACiFSCApMA4GCIOIII7Tq4YkiztferH3TeEN4dAYYorBdpuLWVLWRcRJuZQXDH3aQBgQccca+Hnmb9c/wCntJOkSX7ZfUQ2QTmVEGEiTGBgqJgwOwyd/N8swryNwqUCm83ICIPpE63jVuFFbioUtPQRhcAmCuT94mTEjLeqrliyRY3FXlK6TWBSiDLifVSDWvSpR14fdf8AQ1fpy+zOcE5Ej8KezeNvjXpuD8kHnXUtOq5lx5hTzBUAoOQJCAUnomMTqBpXmhIJjFZ847b4/PurqnJx1DjnCGWnEumytOvvrSei2laCEoJ0IJi7mIFfZTk0sHiJWV/AkNWZvh9tZRzYU4bHbkqk3lKIQVkEmMRegRmK8lyr4aLLbH2Y6CHDzaf+KgFp7gFAdsV6pSgvhiiBha+KywMpBcwOOmBqo+0pwHitouYqHNp7AUtNz39ukVOm/mCSweYxndZ/b9fhWxAkFKTCf8i99gOzYamtIGYBw6yt+wdnZrW0EXQVYNgm6nVR1M/E9wrcgyJBSCRDYm6mcVnUk/E6ZCspIUCRLhi4iMEjTDfYd5rGSFAkS4YuJjBA0w32GmZppGaUmSZ5xw5AagHbc5k5UwMkjNKSCc3HJwA1AO3bmcqMCNQ2D/ss/wB/okViIKdUtJP+yz/f6AVkVZKUMf8AG3oBoSNuzM0xDJyUoYn0begGhI27M1UwCFEAy4ZvKnBI1x33OmQoEhRAMuGb6pwSNcd9zpkKxSAQQDDYi8qMVHQAfAaZmgQ0gEEAw2IvKjFR0AHwHeaalCApQ6P+NvftPZOZ1pKUIClDoj0be/aezc61l0grdw+5HyBjuTTEPpBW7p9kIw9wMdwHbSSBBSk9H/I5v2DsnIZmklIgpSej/kc37B2TpmTjQSCASCGx5qdVHUk/E9woEYKIziEDITie0/M9wp4zJxUchtth8BTWTMkdMxCYwSNMNOwe+sQMwDj1lfEeM6QxgZgHHrK+viaMI2QPeo+PdSwjZI96j491MnIkY9VOnj40ABORIx6qfh41piZgYqOZ23x+dAmYGKj5x23x+JpACIGCRmdT40FMQxEQMEjM6nxoO+nORIw6qd+3661iTkSMOqn5nxjWWM7rP7fr8KAMhM7rP7fr8K6r9jEc3aYx6bcnfoqrlAGYBw6yt+wf1rXV/sY9HaYEC+3H/VWNY6/02Xp+Y6bRRRXAdAUUUUAfKvFJ593VXOL7ukfHZUQDQHDrK+XjOpXFPTOgZc4uT/scKiSIk+aMhv43rtXBDGSIk4JGQ38b01T7VHIbbYfKjGd1HIbd3yqRYbC48pSGklakoU4sjRKRKj7B+tDdZYUdR4UVLs7RDiyObRkUEAhIBHmb1ItDJDSwAfNVvMxiSdT21ylxDrbbbhLjbTiVKbIWRfCVXVQAcIOHZVvZ+BcQWgOJDhvJvIb56FKToebK7yhsIxrwNT4V827ekm+x6EesxVHTF2W9mFAgkgjAg7g+zuOtUHLVlQsbnTc85vzikD0idkjSTnXh+GNWy0FSWnHFFIlxReUlCAZzUpQAJg+7CsOMWG0tqS3aOchQCkFTnOc5JjoG8QccIGWtVofCnp6qbmnTTqs4yTqdUpQa28laAIgYJGZ1Udvp31tZtK25KFrQFJKbqFqTeScwqD0knWc6tLTyYtSEKcW0LrSbykBxClITqpaAq8ANcJqnxndZ/b9Y91e/GUZK4uzgaa5PW8F5VID1j8rbluxNL5ptpOa4F1awTF4xJOSSJ1Meat1rU8444s9JxaluKxOKjN0dgyA1iowiCAYA89W/YP61qXb+HuMXOebU2laQttJzWk5Kw/U6ZUvlTFkjSIk4JGQ1PbPxPdWWMiRKzkPV2w+WmdW9l5NWpxKVobSVLALaS42kxoQlShtgKiWThLzji2kI6bZh0qITcxukEqIjEEdpo8SOXawG2XYhgZgHHrK+InxNAiNkD3qPj3VYcU4I9ZwjnWyhtZ6CgpKgs7BSSRPZoKT/AAd9CnQtshTASXEYHmwqLpInEG8MO3GqWpFq00S4shTkSMeqnbu8TTEzgZUczOW+PzpCZgGVHzjtvj8T3VsstnU4tLbYJKiAAM1HQDxhmau6JMBEQMEjM6ns+lMnIkYdVPz8Z1d23kpa2m1uuNDm2xeIS42qB6xCVSRVbaLA62hpxaSA9e5tWEdAwr2EfpUxnGXDTG4tckfGd1n9v1+FIDMA4dZW/Z9NalcN4c4+ottQYEqUpQSM4zUQM8hrUrinALRZ2w462EtXroKVoWLxmASgmJg4nbChzipU2r7WLa6uiskRJwSMhv2/XuoxnHFWg22w+XfV5Z+SVucbDyGFKChKBKAY0IQTJ7BFUcZgZ9ZR03HjOqjOMuGJxa5MFZ5z20UwmSAkEyQANSTgPeas7TwC0NiVtxAKrsi9AEkx2DGs56kYupNI0jFtYRV0VY8O4K8+grbSLgN28paEJn1QVESfZUa3WJxlxTbiChaYlJjUSCCMCCDIIoU4t0nkGnVkeipVv4e4wsIdQW1FKVgHVKslfofdU2x8m7S6hLiGxdX5l5xCCv8AClRBONDnFK21QtreKKqim4gpUUqBSpJIUDgQQYII3mlVCHXWvsU9Havxt/xVXJK619ifo7V+Nv8AiqstfyMqHmOoUUUVxmwUUUUAfKnFfTOzlzi4G/SNRcZ3VoNqlcV9O7qrnFwNukaiAaA/iV48Gu1EMYGYB/Erx4NWvJ3iCWXFKUq4goUiYJvSReT0QcxOMQMJqqwjZI95Pj3U5yJGPVTt3eJpTipRcX6gnTs9Nx1LRsbAC1S0VIYbUknnELuLWskYJuqIwOd7eaHVk29kiSstNyrUdFYw20qmt3EC4201dgtJWFLvTN67Jy6MBI31qzs/KYIuqFmRziAAHbxCjAIwSQYzOE4ScRXH4U1Gqt5Rrujf4C8PJ+IDEJ5xBPafKAD+iiI7aLSq6zYFZQt0oG0c1j7AQD7ahWHi5b5wuNIeS6ZLasBJVeJgA4T+oEVnxTjS3S0A2hHMhVxAxCbxSVTgPVA7McSTVeHPdVY5v+qJtVyXFkEcStV0kq+91yERBOuBryLQF2AejAvK37PpXof/AMljnC2w02taSlbuZMiDmJVuBhJAJmqDCBIhI81Op7f7PdW2hGStyVYS/BM2nwwWREkQkTdTvuT8z7q9FynKg3YpBK+aXE6S5Iz/AE2qlsL4bcQtxtLpB9EokJjQGMvZ76tLdx5LzbjamUlRHQdK4LQkSlF1IvIgRdOdPU3+JFpWl/oo1teSWnhbLDbLj1pXzi0h0ICSpATIN28CSM8YGJMb1W8Qtbdptbjillpl1ybxBJgAAEhOZwBO01Ks3KFsNpS5ZG3UoEJLiicdboAETmRJAk71CZtzSXFuKsyFhZ+6aKlXWhMgDVQjDHHWs4RlblJO6a9Kr2HJrCRc24IbsSQ2VOo8oaN4xGCXSIRJO43MY6VOYtLLptRLykh5q6+7BUlAaQAlQRAUqSEyNyYrzvEOMFxsMttoaTevruqJxAUB0jtfVJxJnsrRYreG2nUBEpcTcvzBEkTCY6RgYCRGdZ/x5uN5Tv8AT7lb4p+1ENMRskZnUnxppU7hNoS2804s3UpPRGPvMAmDkTGM1BJyJGHVT8/Z8a3WZYQ4lSkBwzKkkwI2kZfKu+Ubg490YJ07Lu18LbcS66xaQ6tN5xbSgUlKCqSQZKSUz7hhW9DDTlkaQ7aAylCjdUUFYVfSCUgAyIInbGoC+Mtht1tmzoa51Fxx2+pXRPnBKTqcQMaws3E2w2lDrAcQgko+8KSTucNsDpgK43DV2rDw8cXVGtwv7mni3D1Wd0trIISAUKScHEqAKVjUAg4z7KnhSv8Ax6hmVOjDPIou4dkmPbUDivEFPvF1SAlRCUobTiEJQISJOZ175pC2/wD65YAzXfU5ewjCUxGOIGM41vKMpRi5L5k02ZpxTaXFM9pwmytuLszjzjocSISgOAlwJUSIkyBeVdnWEiRBrxFvtBccdcUm4FuLWUahSlElPtEx2VbWDlA22ELcsqHVtYNLLhTkSoApAx6SlHsmqV95S1qccxWtRVEYSokkxtJOFR02lOM5OSx6cfhFakotKh2K082826UzcWhd0YYJIMDtjI716VAszj63mX1uOrUCpCmloISYCjeIgxgInXWvJrzxMnWpvBuIizrUsthyW1oCSopAKourkAzdImNarqNJztx5qg05ba7G55U8PaB0fMD2tE/GtvKmedbn/wBDfuvux+lR+H8TS23za2W3UgyL5OBiMu8+/WtjvGectAedaQ6AgIDZMJgAxJAxMqJyA0rOMZxn5cK/7sptNVfb9ErlbN9m9M8wMySfSuxnRaTecsU4wgJHsDigAO6o/EOMh5tSVspLhUCl0q6TYvXi2AlIBRiQAcprKy8cCEolhta2/NcJxGxAIIB941ioUJ+GltyrVX39RuUdzyReNT5S7Od8z7YE1DrZa7QpxxbiovLUVGMpNaa7NNOMUn2MZZbZlXWvsT9Havxt/wAVVyWutfYn6O1fjb/iqo1vIxw5OoUUUVxmwUUUUAfKHFT9+7+Yv+RqJNS+K+nd/MX/ACNRK7FwIJq15Nrs4tTarXJbnHo30ySB0xeBuAFRMTiBgRNVVFAj27D3CwEghqLmMocm6AzfSvDF8q58oImARiMKpOUy7KS15LdgIVeuBQEXvuwq9m4E+cdTGJqjoqVGgMrxmZxpA/rToqxBOlF40UUAMKPvzonCNKVT+GcHdtAUWwDdITBOJUoEgDDDBJMqgdtFgQSf0rILMzJnerpPJd44y3dIKgqVYpSElS4uyALyRBAUZwBAmtHDeEc5a/JnV82bykKUBegpnLETlUuaim2+MhV4KwHSianWXhyS46hx0NJaKgpVwrJIXchKAQVEntrFzhqxaDZ0kLXfCQRIBkAg44jAyQcsaFqR7+/9BtZFvmZnGmD+tWjnDGefdbFohpogc4WypSySEkJbSZPTJGeQp2fgqedcbdfS2hshJduKUFFUXITgRIIJBiMs6XjRq79/UexlVNO9W63WVTTi2lQSgxIyIgFKh2EEHvrQK1jK1aIaMwf1oB0rEU6oDImi8ZmcaVFMVDopU6Qh0UqdADooomgAooooEZV1r7E/R2r8aP4qrkddc+xP0dq/Gj+Kqy1/IyoeY6hRRRXGbBRRRQB8ocV9O7+Yv+RqJUvivp3fzF/yNRK7FwIKKKteTqUl1V8IIDTh6abyQUpkKI2EYxjE1M5bYuXYSVuiqoq7BQo20hDRCWuiUCUApW2jnEE4icVd9SOJMtmyJKWglSA2VYXXE3iQVKn0iF4QoZEaVn46xj1RWw85RXp+NsNCzlSUNhRNnm6i6pN5tRVjON6AfZ21H5S2Lm27ObqQbhSopSBeMIWkmMzCiJ/4miOvGTXuDg0UVFZMHppyOIzyzr0fHWW27Qy2htF1Sy5IRAUFuFIbg5hITkdVbVU9VRaXe/0JRtWeaqbwq3BouEi8FtLRdzF4joEiQCAr4mrXj9kbC2UoSgXnXkkpTdycQAg73JKe46Vut9jCOINJDbZCwjoFMIUUlTapToCpBPfULqItLHKb/BWx2bXOUNkIUEtPIKlrVf50qUD5qFTIJKUk6iIAxzFTYOItt23n7qktBxagkYqAN6B2541ZuWVpNqsqEIaWhSXDMYLSXF3b26ggATvNabbYUeU2Vtvm4UB0gAQsc4sJUrQ9ECe+o8WEltp5T/AbWskOx2xnn3XXL6bynFNFKAopK1qIVBMSARSsdsbZW642ta1QUtKWmFEr85asTBGOta+ULIRaXAEhIVcWEgRAUhJiNMZwquFaR04yV5ppY9hNtOix4M+02pSnCsKCYbUlIWUqPWgkCf7rbYX2Ap1txbpaUoKS4EDnCUmQVJk+drid6qadW9JSbdvP+diVKiXxK1c66twCAogJGwSkITPbCR76jCkKK0jFRSS9CW7dmQrIVhWQqgHTpU6oQ0qgg4YEHESMMcQcx2V0L7PLVZrXaPJrVYrGSpClIcSylBJSRKCnI4EmRGVc8q15L8Q8nttndmAh1N78KjcV+1RqJq0CdMuOU3Jq7xc2NhNxLq2y2BklK0ysjsTdcPdXreWnBrGh+xWKz2ZlDj7qCtSW0hYbQeliBPSg+26a9qvgSTxEW03ehZ+aTvJWSVbYJw7zXPuSlr/8jx5y1ZoaSst9iUjmm/ffWr/asVJvPZfsqqJfLLkxZnLbYrHZ2mmOc5xbq20JSq4gDDAYyL0TrjpUvjb3CuFKbYXYA4Vpm+WkLkSRi45ipWGIGWFeX5e8Te/8u47Z796yJbSFJSVBEAqVeA6pKyDOde45J8oW+MsuNWmyjoAX5F5pUyJSo4pVhlmN6TtRTfAYs5XxNtq2cQ5uwthtt1baG0hFyJSL6yjSDePsTXW7dyJsHkzrTVna51DRCV3QXAooNxZVnJImaoPs+5LJa4ja3B0m7KtTLRJk3lAKV3pQoJn/AJGvVcn+GWtu22x60KbLT5RzSUqKikN3kpBBSAJSQTBONE59nwEV3PntBwFdd+xP0dq/Mb/iquacoLHzNstDXqOuAewqKk/tIrpf2J+itX5jf8VVpqu4Ex8x1CiiiuQ1CiiigD5Q4r6d38xf8jUSpfFfTu/mL/kaiV2LgQVIsNtWyu+2QFQRiJEHMRUeihpNUwJrnFHFKdUopJeSEOdEZAJAgaHojGhzijqmgyVSgRp0oBvBJV6oOMVCoqPDh2DcyfaOLOuJuKKYPNnzR/iEI/Q99Y2zibjoUlZTClhwwmOkEXMMcBd0qFRQtOC4QbmZIVBBGYM1NtPFnXClSimUuLdSQmIUsgq/1JAMbzUKim4xbtoSbROXxd0rQslMtrW4noCLy1BSpGokZUJ4s6FtrBTeaKlIN3Var6p3E1BpCl4ceyHuZOb4o6lTagUgtBQb6IwCiSQd8SabXFXEqbUCmWklCOiIgzmNczUGijwodhbmbrTalOXL8Hm0BtOGN1MkSdTia1ClRWiSSpCMqKQp0xDp0qYoAYpisadMDIU6VMVQDpLTII3wp0UCPd2/7TbS7ZVWfmkIK2+bLgWq9ldUoCIkidcJqn5H8q1cOU4ptlDhcCE9JRTdCLxgQDne/QV5ynUbI1VBbPVcA5bu2S02i0c0hxVpXeWFKUCnpLUEpI0F+MRoKu+I/axaFoKWGG2ieuVFwjtAhIn2z7K51T9okagGCdxOntpPTi3dBuZ7CwcvXmbGqyttpSVBy8/ziisrcJK3covSTrhhUHgfK+1WZ5LpddeCQpJbcdcKDeEY4nEZj2VMtDlmdcl20JU1zsstJcKW0tltdxCmgmWbqg2lRByUr21rbXZLvNlTQvKZW4kLXzPOJZtIgKmeb5xTIUQYF5WMUVHsPPcqOUXFjbLSu0KbDanAmUpJI6KQm9JAzAFdJ+xL0dq/MR/FVc45QOoW43cLZCWGUHmySgKSiFJSTmAfbXR/sS9HavzEfxVU6v0xR8x1GiiiuQ1CiiigDhf2l8iHm7Q5arO2pxlw31BAKlNqPnSkY3ScZGUmYwrnJoorohJ0SwooorQYUUUUAFFFFAgmiiigQUUUUwHNOiikAUUUUwCnNFFADp0UUxDBpg0qKYDBrIGnRQATRNFFUIc0UUUAOaKKKCQmnNFFAEvh3DnrQsIYbW4o6JSTHaTkkdpIrvfIXk55BZQ2oguLUXHSMrxAASDqEgAduJ1pUVy60nwaQR6iiiisCz//2Q=='alt='image1'/>
         <img className='image_card' src='data:image/jpeg;base64,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'/>
       </Box>
       </Center>
       <form onSubmit={Formik.handleSubmit}>
        <Input  placeholder="*Enter card Number" marginTop={"25px"} size="lg" name='card_number' value={Formik.values.card_number} onChange={Formik.handleChange} onBlur={Formik.onBlur}/>
       {Formik.errors.card_number&&Formik.touched.card_number?<p className='errors'>{Formik.errors.card_number}</p>:null}
        <Input placeholder="*Name on card" marginTop={"25px"} size="lg" name='name_card' value={Formik.values.name_card} onChange={Formik.handleChange} onBlur={Formik.onBlur}/>
        {Formik.errors.name_card&&Formik.touched.name_card?<p className='errors'>{Formik.errors.name_card}</p>:null}
        <Box className='card_box_input'>
        <Input placeholder="*CVV" type="number" marginTop={"25px"} size="lg" name='cvv' value={Formik.values.cvv} onChange={Formik.handleChange} onBlur={Formik.onBlur}/>
            <Input placeholder="" type="date" marginTop={"25px"} size="lg" name=''/>
           
        </Box>
        <Box>
        {<p>{""}</p>}
         {Formik.errors.cvv&&Formik.touched.cvv?<p className='errors'>{Formik.errors.cvv}</p>:null}
        </Box>
        <Input placeholder="*Enter Country name" marginTop={"25px"} size="lg" name='country_name'value={Formik.values.country_name} onChange={Formik.handleChange} onBlur={Formik.onBlur}/>
        {Formik.errors.country_name&&Formik.touched.country_name?<p className='errors'>{Formik.errors.country_name}</p>:null}
        <Input placeholder="Enter postCode" type="number" marginTop={"25px"} size="lg" name='postcode' value={Formik.values.postcode} onChange={Formik.handleChange} onBlur={Formik.onBlur}/>
        {Formik.errors.postcode&&Formik.touched.postcode?<p className='errors'>{Formik.errors.postcode}</p>:null}
        <Box className='Final_button'>
      <Center> <p style={{fontSize:"16px",fontWeight:"bold",textAlign:"center",marginTop:"20px"}}>We'll pre-authorise up to $ 46.00 USD on your card, then send you<br/> back to the seller to complete your purchase. If you don't completeit or the purchase amount <br/> changes, any pending pre-authorisations usually drop off within 1 business day.</p></Center> 
      <Center><Button bg={"black"} p={7} color="white" w={190} m="40px" type="submit" >Pay and Order</Button></Center>
      </Box>

       </form>
      

        </div></div>
  )
}

export default Carddetails