<img width="543" height="635" alt="image" src="https://github.com/user-attachments/assets/541d2ee0-3a54-4c8b-aa95-73de867b04d7" />
Book Store

Book Store, React ve Vite kullanılarak geliştirilmiş bir kitap satış uygulamasıdır. Kullanıcılar kitapları görebilir, sepete ekleyebilir, sepetten çıkarabilir ve sepetteki ürün bilgileri localStorage ile saklanır.

Bu proje, React Context API kullanımı ve localStorage entegrasyonu konusunda pratik yapmanı sağlar.

Özellikler
Kitap Listeleme
Products component’i tüm kitapları listeler.
Her kitap için başlık, fiyat ve görsel gösterilir.
Kullanıcı “Add to cart” butonuna tıklayarak kitabı sepete ekleyebilir.
Sepet Yönetimi
CartContext ile sepetteki ürünler yönetilir.
addItem fonksiyonu: Ürünü sepete ekler veya mevcutsa quantity’sini artırır.
removeItem fonksiyonu: Ürünün quantity’sini azaltır veya tamamen çıkarır.
ShoppingCart component’i sepetteki tüm ürünleri gösterir ve toplam fiyatı hesaplar.
LocalStorage Desteği
Sepet bilgisi useLocalStorage hook’u ile s11d1 anahtarı altında saklanır.
Sayfa yenilense bile sepetteki ürünler kaybolmaz.
React Context API Kullanımı
ProductContext kitap listesini sağlar.
CartContext sepetteki ürünleri ve işlemleri yönetir.
Componentler arasında prop drilling olmadan veri paylaşımı yapılır.
