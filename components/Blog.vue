<template>
<div>
  <h2>
    {{blog.Title}}
  </h2>
  <p>
    {{blog.Body}}
  </p>
</div>
  
</template>

 <script>
 export default {
   name: "Blog",
   props: {
     blog :{
       type: Object,
       required: true
     }
   }
 }
 </script>
 
