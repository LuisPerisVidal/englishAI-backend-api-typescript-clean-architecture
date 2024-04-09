
## About this project

This project is the API for the website: https://english.ovh, a website where you can improve your english with the help of AI.

You can also find the Next.js frontend on GitHub: https://github.com/LuisPerisVidal/englishAI-frontend-nextjs

Additionally, if you speak spanish you can view the entire project on youtube: https://www.youtube.com/channel/UCowYQn61yq21aFmrrKRT4JQ

## About the technology

This project was developed with:
- TypeScript,
- Hexagonal Architecture + Vertical Slice
- openAI + fine-tunning
- GCP Firestore like DDBB

### About Vertical Slice

In my personal opinion, a vertical slice is the cleanest way to implement hexagonal architecture. You can find more information here: https://ivanojgarcia.medium.com/vertical-slicing-a-term-for-powerful-hexagonal-architecture-3687fded1925

Without Vertical Slicing:

```note
- domain/
- application/
- infraestructure/
```

With Vertical Slicing:

```note
- FeatureA/
    - application/
    - domain/
    - infraestructure/
- FeatureB/
    - application/
    - domain/
    - infraestructure/
```


### openAI + fine-tunning

By default, this API uses the gpt-3.5-turbo model, but you can replace it and train your own model on openAI with the following file:

/fine-tunning.js

