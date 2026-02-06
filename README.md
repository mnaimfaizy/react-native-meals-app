# React Native Meals App

A cross-platform mobile application built with React Native and Expo that allows users to browse through different meal categories, view detailed recipes, and manage their favorite meals.

## 📱 Features

- **Browse Meal Categories**: Explore 10 different meal categories including Italian, Asian, French, German, and more
- **View Meal Details**: Access comprehensive meal information including:
  - Ingredients list
  - Step-by-step cooking instructions
  - Preparation time
  - Complexity level
  - Affordability rating
  - Dietary information (Gluten-free, Vegan, Vegetarian, Lactose-free)
- **Favorites Management**: Mark meals as favorites and access them quickly from a dedicated favorites screen
- **Drawer Navigation**: Easy navigation between categories and favorites using an intuitive drawer menu
- **Custom Themed UI**: Consistent color scheme with a warm, food-themed palette

## 🛠️ Tech Stack

### Core Technologies
- **React Native** (0.72.4) - Mobile app framework
- **Expo** (~49.0.8) - Development platform
- **React** (18.2.0) - UI library

### Navigation
- **@react-navigation/native** (^6.1.7) - Navigation library
- **@react-navigation/native-stack** (^6.9.13) - Stack navigator
- **@react-navigation/drawer** (^6.6.3) - Drawer navigator

### State Management
- **React Context API** - Currently active for favorites management
- **Redux Toolkit** (^1.9.5) - Available as alternative (commented out in code)
- **react-redux** (^8.1.2) - Redux bindings for React

### UI & Animations
- **react-native-gesture-handler** (~2.12.0) - Gesture handling
- **react-native-reanimated** (~3.3.0) - Advanced animations
- **@expo/vector-icons** - Icon library (Ionicons)

## 📁 Project Structure

```
react-native-meals-app/
├── App.js                      # Main app component with navigation setup
├── app.json                    # Expo configuration
├── package.json                # Dependencies and scripts
├── babel.config.js             # Babel configuration
├── assets/                     # Images and static assets
│   ├── icon.png
│   ├── splash.png
│   ├── adaptive-icon.png
│   └── favicon.png
├── components/                 # Reusable UI components
│   ├── CategoryGridTile.js    # Category card component
│   ├── IconButton.js          # Custom icon button
│   ├── MealDetails.js         # Meal metadata display
│   ├── MealDetail/
│   │   ├── List.js           # Ingredients/steps list
│   │   └── Subtitle.js       # Section subtitles
│   └── MealsList/
│       ├── MealItem.js       # Individual meal card
│       └── MealsList.js      # Meals list container
├── data/
│   └── dummy-data.js         # Sample meals and categories data
├── models/
│   ├── category.js           # Category class model
│   └── meal.js              # Meal class model
├── screens/                   # Screen components
│   ├── CategoriesScreen.js   # Home screen with categories grid
│   ├── MealsOverviewScreen.js # Meals list for a category
│   ├── MealDetailScreen.js   # Single meal details
│   └── FavoritesScreen.js    # User's favorite meals
└── store/                     # State management
    ├── context/
    │   └── favorites-context.js # Context API for favorites
    └── redux/
        ├── favorities.js      # Redux slice (alternative)
        └── store.js          # Redux store configuration
```

## 📋 Prerequisites

Before running this project, ensure you have the following installed:

- **Node.js** (v14 or later)
- **npm** or **yarn**
- **Expo CLI** - Install globally: `npm install -g expo-cli`
- **iOS Simulator** (for Mac users) or **Android Studio** (for Android development)
- **Expo Go app** (for testing on physical devices)

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd react-native-meals-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

## 📱 Running the App

### Start the development server
```bash
npm start
```

### Run on iOS (macOS only)
```bash
npm run ios
```

### Run on Android
```bash
npm run android
```

### Run in web browser
```bash
npm run web
```

### Using Expo Go
1. Start the development server with `npm start`
2. Scan the QR code with:
   - **iOS**: Camera app
   - **Android**: Expo Go app
3. The app will open in Expo Go

## 🏗️ App Architecture

### Navigation Structure

The app uses a hybrid navigation structure combining Stack and Drawer navigators:

```
Stack Navigator (Root)
└── Drawer Navigator
    ├── Categories Screen (Home)
    └── Favorites Screen
└── Meals Overview Screen
└── Meal Detail Screen
```

### Screen Flow

1. **Categories Screen**: Entry point displaying all meal categories in a 2-column grid
2. **Meals Overview Screen**: Shows all meals belonging to a selected category
3. **Meal Detail Screen**: Displays complete recipe details with ingredients, steps, and metadata
4. **Favorites Screen**: Accessible from drawer, shows all favorited meals

### State Management

The app currently uses **React Context API** for state management:

- **FavoritesContext**: Manages the list of favorite meal IDs
  - `addFavorite(id)`: Adds a meal to favorites
  - `removeFavorite(id)`: Removes a meal from favorites
  - `ids`: Array of favorite meal IDs

**Note**: Redux implementation is available but commented out. To switch to Redux:
1. Uncomment Redux imports in `App.js`
2. Wrap the app with `<Provider>` from react-redux
3. Replace Context API calls with Redux hooks in screens

## 📦 Data Models

### Category Model
```javascript
{
  id: string,        // Unique identifier (e.g., "c1")
  title: string,     // Category name (e.g., "Italian")
  color: string      // Hex color for UI (e.g., "#f5428d")
}
```

### Meal Model
```javascript
{
  id: string,              // Unique identifier
  categoryIds: string[],   // Associated categories
  title: string,           // Meal name
  affordability: string,   // "affordable" | "pricey" | "luxurious"
  complexity: string,      // "simple" | "challenging" | "hard"
  imageUrl: string,        // Recipe image URL
  duration: number,        // Preparation time in minutes
  ingredients: string[],   // List of ingredients
  steps: string[],         // Cooking instructions
  isGlutenFree: boolean,   // Dietary flags
  isVegan: boolean,
  isVegetarian: boolean,
  isLactoseFree: boolean
}
```

## 🎨 Color Scheme

The app uses a warm, food-inspired color palette:

- **Primary Background**: `#351401` (Dark brown)
- **Secondary Background**: `#3f2f25` (Medium brown)
- **Accent Color**: `#e4baa1` (Light cream)
- **Text**: `white`

## 🔧 Configuration

### Expo Configuration (`app.json`)
- **App Name**: react_native_meals_app
- **Version**: 1.0.0
- **Platforms**: iOS, Android, Web
- **Orientation**: Portrait

### Babel Configuration
Standard Expo babel preset is used for React Native.

## 📚 Key Components

### CategoryGridTile
Displays individual category cards in a pressable tile format with custom colors.

### MealItem
Shows meal cards with image, title, duration, complexity, and affordability.

### MealsList
Container component that renders a FlatList of MealItem components.

### IconButton
Reusable button component with Ionicons integration for actions like favoriting.

### MealDetails
Displays meal metadata (duration, complexity, affordability) in a formatted layout.

## 🔄 Future Enhancements

Potential improvements for the app:

- [ ] Add search functionality for meals
- [ ] Implement filtering by dietary requirements
- [ ] Add user authentication
- [ ] Allow users to add custom recipes
- [ ] Implement meal planning features
- [ ] Add cooking timers
- [ ] Enable recipe sharing
- [ ] Add shopping list generation from ingredients
- [ ] Support multiple languages
- [ ] Add dark/light theme toggle

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is available for personal and educational use.

## 👨‍💻 Developer Notes

### Switching to Redux

If you prefer to use Redux instead of Context API:

1. In `App.js`, uncomment:
   ```javascript
   import { Provider } from "react-redux";
   import { store } from './store/redux/store';
   ```

2. Wrap NavigationContainer with Provider:
   ```javascript
   <Provider store={store}>
     <NavigationContainer>
       {/* ... */}
     </NavigationContainer>
   </Provider>
   ```

3. In screen files, replace Context hooks with Redux hooks:
   ```javascript
   // Instead of:
   const favoriteMealCtx = useContext(FavoritesContext);
   
   // Use:
   const dispatch = useDispatch();
   const favoriteMealIds = useSelector(state => state.favoriteMeals.ids);
   ```

---

**Built with ❤️ using React Native and Expo**
