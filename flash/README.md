## File Structure
src_checkpoint_04/
├── actions
│   ├── creators.js
│   ├── creators.js.orig
│   ├── types.js
│   └── types.js.orig
├── components
│   ├── Button.js
│   ├── DeckScreen
│   │   ├── DeckCreationFields.js
│   │   ├── DeckCreation.js
│   │   ├── Deck.js
│   │   └── index.js
│   ├── Flashcards.js
│   ├── Header
│   │   ├── index.js
│   │   ├── Logo.js
│   │   └── styles.js
│   ├── HeadingText.js
│   ├── Input.js
│   ├── LabeledInput.js
│   ├── NewCardScreen
│   │   └── index.js
│   ├── NormalText.js
│   └── ReviewScreen
│       ├── index.js
│       ├── ReviewButtons.js
│       ├── ReviewSummary.js
│       └── ViewCard.js
├── data
│   ├── Card.js
│   ├── Deck.js
│   ├── Mocks.js
│   └── QuizCardView.js
├── reducers
│   ├── decks.js
│   ├── decks.js.orig
│   ├── index.js
│   ├── reviews.js
│   └── reviews.js.orig
├── storage
│   ├── decks.js
│   ├── decks.js.orig
│   └── decks.js.rej
└── styles
    ├── colors.js
    └── fonts.js


## Dependencies

You'll need to add a few dependencies to your project by running the following command:

```
npm install --save md5 lodash react-navigation redux react-redux
```
`npm install --save react-native-gesture-handler`
`npm install --save react-navigation`

## Debugging Notes
remove node_modules and package-lock.json
`npm install`
`npm install --save react-navigation`
`npm install --save react-native-gesture-handler`
`react-native link`
`cd android/ ; chmod gradlew; sudo ./gradlew clean`
`sudo lsof -i :8081; kill -i [id]`
