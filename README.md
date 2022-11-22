# Tokium UI Library that provides royalty gating to dApps.

## React UI

### Installation

#### NPM

```
npm i @tokium.co/tokiumwrapper
```

#### Yarn

```
yarn add @tokium.co/tokiumwrapper
```

#### TokiumContext

Context for children components.

Importing
```
import { TokiumContext } from '@tokium.co/tokiumwrapper';
```
Usage
```
const tokium = useContext(TokiumContext);
```

#### TokiumProvider

Provides context to children components. Takes collectionURL (only supports magic eden at the moment) and the user's public key.

Importing
```
import { TokiumProvider } from '@tokium.co/tokiumwrapper';
```
Usage
```
// In the index.js file

<TokiumProvider pubkey={user.wallet} collectionURL={'https://magiceden.io/collections/{collection name}'}>

  // Your components go here
  
</TokiumProvider>
```

#### GatedRoute

Royalty gate a route on your website and redirect the user.

Importing
```
import { GatedRoute } from '@tokium.co/tokiumwrapper';
```
Usage
```
// In the index.js file

// In the Router component
<GatedRoute redirect='/'>

  // The component of your gated route goes here
  
</GatedRoute>
```

#### Lockscreen

Royalty gate a component on your website with custom width.

Importing
```
import { Lockscreen } from '@tokium.co/tokiumwrapper';
```
Usage
```
// In your component file

<Lockscreen style={{ width: 760px }}>

  // The royalty gated component goes here
  
</Lockscreen>
```
