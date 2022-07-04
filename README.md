This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and [TypeScript Redux Router Eslint Airbnb SASS template](https://github.com/erdoganbulut/cra-template-typescript-redux-router-eslint-airbnb-sass).

## Available Scripts

In the project directory, you can run:

#### `yarn start`

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload if you make edits. You will also see any lint errors in the console.

#### `yarn test`

Launches the test runner in the interactive watch mode. See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `yarn build`

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes. Your app is ready to be deployed! See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

#### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Development

### Folder Structure

Folder structure should look like this;

```
src/
├── App.test.tsx
├── App.tsx
├── common
│   ├── request.ts
│   └── %util_name%.ts
├── components
│   ├── partials
│   │   └── %ModuleName%
│   │       ├── %ParticalName%.tsx
│   │       ├── %ParticalName%.test.tsx
│   │       └── %ParticalName%.scss
│   └── shareds
│       └── %ParticalName%
│           ├── %ParticalName%.tsx
│           ├── %ParticalName%.test.tsx
│           └── %ParticalName%.scss
├── fonts
├── img
├── index.tsx
├── react-app-env.d.ts
├── routes
│   ├── %ModuleName%
│   │   ├── index.tsx
│   │   ├── index.scss
│   │   ├── %ModuleRouteName%
│   │   │   ├── index.tsx
│   │   │   ├── %ModuleRouteName%.test.tsx
│   │   │   └── %ModuleRouteName%.scss
│   │   └── %ModuleRouteName%
│   │       ├── index.tsx
│   │       ├── %ModuleRouteName%.test.tsx
│   │       └── %ModuleRouteName%.scss
│   └── router.tsx
├── setupTests.ts
├── store
│   ├── slices
│   │   ├── %module-name%.slice.ts
│   │   └── %module-name%.slice.ts
│   ├── hooks.ts
│   └── index.ts
└── styles
    ├── global.scss
    └── vendors.scss
```

### State Management

Redux, a state management library, was used for state management in the project. It is divided into redux slices to avoid complexity, ensure maintainability, and divide into domains. Use store (redux) for your global states, states that you will use at many different points, states that you will access and manage remotely.

Go to the `src/store/slices` folder. Open or create the slice file of the module whose state you will manage. If you have created a new slice, you must define it in the `src/store/index.ts` file.

### Style Management

For global styling operations, there are global sass files under the `src/styles` folder. The `vendors.scss` you will use to add your dependencies and `global.scss` for your global styles are located here. You can also create global sass files here that you want to import in other sass files like `shareds.scss` or `variables.scss`.

Components own style files should be located next to the `%componentname%.tsx` file like as `src/routes/Episode/List/List.scss`

### Linter / Eslint

The project has a strong linter configuration to ensure consistency and maintainability. It generally follows the airbnb and prettier configuration.

### Component Structure

All components in the project are created as functional component. Continuity should be ensured by not using class components unless needed.
