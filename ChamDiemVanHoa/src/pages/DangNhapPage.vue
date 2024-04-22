<template>
    <div class="wrap">
        <form action="">
            <v-card width="300px">
                <v-card-title>
                    <H4>ĐĂNG NHẬP HỆ THỐNG</H4>
                </v-card-title>
                <v-card-text>
                    <v-text-field density="compact" label="USERNAME" variant="outlined"></v-text-field>
                    <v-text-field density="compact" label="PASSWORD" variant="outlined"></v-text-field>
                    <v-select label="Vai trò" density="compact" variant="outlined"
                        :items="['Xã Phường', 'VHTT&DL', 'Công an', 'TNMT', 'Y tế', 'MTTQ', 'Hội Khuyến học', 'KH-ĐT', 'LĐ-TBXH', 'GD-ĐT', 'Tư pháp']"></v-select>
                    <v-card-actions>
                        <v-btn prepend-icon="mdi-login" variant="elevated" color="green" width="100%">
                            Đăng nhập
                        </v-btn>
                    </v-card-actions>
                </v-card-text>

            </v-card>
        </form>
    </div>
</template>

<script setup>

</script>

<style scoped>
.wrap {
    width: 100vw;
    height: 100vh;
    background-image: url('../assets/images/2259217.jpg');
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
}

.wrap img {
    height: 300px;
}
</style>