let urlBase = "https://www.google.com/search?q="; // Temel Google arama URL'si

        const searchInput = document.querySelector(".searchInput");
        const searchBtn = document.querySelector(".search-btn");

        searchBtn.addEventListener("click", () => {
            if (searchInput.value !== "") {
                const searchTerm = encodeURIComponent(searchInput.value); // Arama terimini URL uyumlu hale getirin
                const fullUrl = urlBase + searchTerm;
                window.open(fullUrl, "_blank");
                searchInput.value = ""; // Giriş alanını temizleyin
            }
        });
        document.addEventListener("keydown", function (event) {
            if (event.key === "Enter") { // Enter tuşuna basıldığını kontrol edin
                // Enter tuşuna basıldığında yapılacak işlemi buraya ekleyin
                searchBtn.click(); // "Ara" butonunu tıklamak gibi bir işlem yapabilirsiniz
            }
        });