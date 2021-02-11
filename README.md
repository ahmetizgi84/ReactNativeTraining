# React-Native Alıştırma

- Bu uygulama bir dizi react-native pratiklerini içermektedir. Tanımlamalarda bazı hatalar olabilir.

## FlatList

- Dizi map fonksiyonuna sokularak da bir liste elde edilebilir. Fakat React-Native'de FlatList,
  map fonksiyonuna sokularak elde edilen listeden daha iyidir.
  FlatList yapısında bulunan birçok optimizasyon seçeneği ile daha performanslı hale gelir.
- data, renderItem ve keyExtractor olmak üzere 3 adet props alır.
- keyExtractor props'unu kullanmak istemezsek, data listesine key: "1" eklememiz gerekir.
  key değeri benzersiz ve String olmalıdır.

## Button

- Button : En basit haliyle bir butondur ve onPress eventlerini yakalamak için kullanılır.
- TouchableOpacity : onPress eventlerini yakalamak için kullanıldığı gibi, custom style ile istenilen büyüklükte, şekilde ve renkte kullanılabilir.

## Props & State

- Props : Parent komponentden child komponente data geçirmek için kullanılan bir sistemdir.
- State : Zamanla değişen datayı takip etmek için kullanılan bir sistemdir. Eğer state'de tutulan data değişirse,
  state'in bulunduğu komponent rerender olur.

## Spread Operator

- '...' : dizi olarak bulunan state'in kopyasını almak istediğimizde spread operatörünü kullanırız.

## Reducer

- karmaşık uygulamalarda state yönetimini kolaylaştırmak için kullanılan yapıdır. bkz. Context API, Redux...
- Tanımladığım action

```js
{ colorToChange: 'red', amount: 15 }
```

- React Komunitesindeki genel tanımlama:

```js
{ type: 'CHANGE_RED', payload: 15 }
```

- type : Değişiklik yapmak istediğimiz operasyonu tanımlayan String tipindeki değişkendir.
- payload : Operasyonda değişecek değeri tutan değişkendir.

## TextInput

- TextInput'da kullanılan bazı proplar

```js
autoCapitalize = 'none';
autoCorrect = {false};
```
