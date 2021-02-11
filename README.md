# React-Native Alıştırma

- Bu uygulama bir dizi react-native pratiklerini içermektedir.

## FlatList

- Dizi map fonksiyonuna sokularak da bir liste elde edilebilir. Fakat React-Native'de FlatList,
  map fonksiyonuna sokularak elde edilen listeden daha iyidir.
  FlatList yapısında bulunan birçok optimizasyon seçeneği ile daha performanslı hale gelir.
- data, renderItem ve keyExtractor olmak üzere 3 adet props alır.
- keyExtractor props'unu kullanmak istemezsek, data listesine key: "1" eklememiz gerekir.
  key değeri benzersiz ve String olmalıdır.
