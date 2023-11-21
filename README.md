# POSTMAN UNILORIN COMMUNITY MEETUP

> Run on your cli
`cp .env.example .env`
This will create a environment file at the root of your project.

> Install OpenAI with:
`npm install openai`

> Replace the `KEYY**********KEY` in your `.env` with your own key.

> Import OpenAI in App.js

```js
import { OpenAI } from "openai";
```

> Initialize open AI call

```js
const openai = new OpenAI({
  apiKey: import.meta.env.VITE_MY_API_KEY,
  dangerouslyAllowBrowser: true,
});
```

> Change the fetch function appropriately in your return codeblock

```js
    Change your fetch function🧮
    async function fetchData() {
        try {
        setIsLoading(true)
        const response = await openai.images.generate({
            prompt: prompt,
            n: 1,
            size: "512x512"
        })
        setImage(response.data[0].url);
        setIsLoading(false);
        } catch(e) {
        setIsLoading(false);
        console.log(e);
        }
    }
```

> Change the loading session

```js
{
  isLoading ? (
    <>
      <p>Please wait while the image is been generated...</p>
    </>
  ) : (
    <img
      style={{ width: 512, height: 512 }}
      src={image}
      alt="Generated Image"
    />
  );
}
```
