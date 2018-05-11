<template>
    <v-dialog scrollable persistent v-model="show" max-width="600px" width="600px">
        <v-card>
            <v-card-title>
                <span class="headline">Điều khoản sử dụng dịch vụ</span>
            </v-card-title>
            <v-card-text>
                Bla bla bla x 1000
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <!--Redirect back to homepage-->
                <v-btn color="red darken-1" @click="onDecline" flat="flat">Từ chối</v-btn>
                <v-btn color="green darken-1" flat="flat" @click="show = false">Đồng ý</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
  export default {
        props: {
            show: {
                required: true
            },
            redirect: {
                default: 'https://www.google.com'
            }
        },
        methods: {
            onDecline: function () {
                window.location.replace(this.redirect);
            }
        }
  }
</script>