<template>
    <header class="header shadow mb-5">
        <div class="container">
            <div class="header-content py-3">
                <div
                    href="#"
                    class="header-icon text-white rounded bg-primary px-2 py-1"
                >
                    <img src="@/assets/svg/shield.svg" alt="shield" />
                    <span class="header-title ps-1">Шифрования</span>
                </div>

                <ul class="nav">
                    <li class="nav-item">
                        <a href="#vigenere-encrypt" class="nav-link"
                            >Шифр Виженера</a
                        >
                    </li>
                    <li class="nav-item">
                        <a href="#caesar-encrypt" class="nav-link"
                            >Цезарь Шифрі</a
                        >
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>

<style scoped>
.header {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;

    width: 100vw;

    background-color: #fff;
}

.header-icon {
    display: flex;
    justify-content: center;
    align-items: center;
}

.header-content {
    display: flex;
    justify-content: space-between;
}

@media (max-width: 576px) {
    .header-title {
        display: none;
    }
}
</style>
