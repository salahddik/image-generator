const API_KEY = "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"

const submitIcon = document.querySelector ("#submit-icon")

const inputElement = document.querySelector("input")

const imageSection = document.querySelector(".images-section") 




const getImages = async () => {
    const options = {
        method : "POST",
        headers : {
            "Authorization":`Bearer ${API_KEY}`,
            "Content-Type" :  "application/json"
        },
        body : JSON.stringify({

                prompt: inputElement.value,
                n: 4,
                size: "1024x1024"    
            
            }) 
    }
 try {
  const response = await fetch ("https://api.openai.com/v1/images/generations" , options)
  const data = await response.json ()
  data?.data.forEach(imageObject => {
    const imageContainner = document.createElement ("div")
    imageContainner.classList.add("image-container")
    const imageElement = document.createElement ("img")
    imageElement.setAttribute ( "src", imageObject.url)
    imageContainner.append(imageElement)
    imageSection.append(imageContainner)
})

 } catch (error) {
    console.error(error)
 }


}

submitIcon.addEventListener('click', getImages)