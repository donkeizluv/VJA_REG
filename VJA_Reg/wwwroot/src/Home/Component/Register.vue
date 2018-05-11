<template id="register">
    <v-container>
        <!--Term dialog-->
        <term-dialog v-bind:show.sync="termDialog" />
        <v-stepper v-model="step" vertical>
            <!--STEP1-->
            <v-stepper-step step="1" :complete="step > 1">Thông tin khoản vay</v-stepper-step>
            <v-stepper-content step="1">
                <v-layout row wrap>
                    <!--1st Row-->
                    <v-flex class="pr-5" md6>
                        <v-select :items="loanPeriods"
                                  v-model="reg.loan.period"
                                  label="Thời hạn khoản vay"
                                  clearable></v-select>
                    </v-flex>
                    <v-flex md6>
                        <v-select :items="dueDates"
                                  v-model="reg.loan.dueDate"
                                  label="Ngày thanh toán hàng tháng"
                                  clearable></v-select>
                    </v-flex>
                </v-layout>
                <v-btn color="primary" @click.native="step = 2">Tiếp tục</v-btn>
            </v-stepper-content>
            <!--STEP2-->
            <v-stepper-step step="2" :complete="step > 2">Thông tin cơ bản</v-stepper-step>
            <v-stepper-content step="2">
                <v-layout row wrap>
                    <!--1st Row-->
                    <v-flex class="pr-5" md6>
                        <v-select :items="customers"
                                  v-model="reg.basic.customerId"
                                  label="Người đứng tên khoản vay"
                                  item-text="name"
                                  item-value="id"
                                  clearable></v-select>
                    </v-flex>
                    <!--Next row-->
                    <!--DOB-->
                    <v-flex md6>
                        <v-menu :close-on-content-click="false"
                                :nudge-right="40"
                                lazy
                                transition="scale-transition"
                                offset-y
                                full-width>
                            <v-text-field slot="activator"
                                          v-model="customerDobDisplay"
                                          label="Ngày sinh"
                                          prepend-icon="event"></v-text-field>
                            <v-date-picker v-model="reg.basic.dob" no-title></v-date-picker>
                        </v-menu>
                    </v-flex>

                </v-layout>
                <v-btn color="primary" @click.native="step = 3">Tiếp tục</v-btn>
                <v-btn flat @click.native="step = 1">Quay lại</v-btn>
            </v-stepper-content>
            <!--STEP3-->
            <v-stepper-step step="3">THÔNG TIN NGƯỜI THÂN</v-stepper-step>
            <v-stepper-content step="3">
                <v-layout>
                  <v-flex md12>NYI...</v-flex>
                </v-layout>
                <v-btn color="primary">Hoàn tất</v-btn>
                <v-btn flat @click.native="step = 2">Quay lại</v-btn>
            </v-stepper-content>
        </v-stepper>
        <!--<my-footer></my-footer>-->
    </v-container>
</template>
<script>
    import myFooter from './MyFooter.vue'
    import termDialog from './TermDialog.vue'
    export default {
        name: 'Register',
        template: '#register',
        components: {
            //'my-footer': myFooter
            'term-dialog': termDialog
        },
        data: function () {
            return {
                termDialog: false, //Show term dialo
                step: 1,
                reg: {
                    basic: {
                        customerId: null,
                        dob: null,
                        idCard: null,
                        idCardIssueDate: null,

                        rsAddress: null, 
                        tempAddress: null,

                        martialStatus: null, //Bind to db
                        spouseName: null,
                        spouseIdCard: null,
                        spouseDob: null,
                    },
                    loan: {
                        period: null, //list, period of loan
                        dueDate: null //list
                    },
                    profession: {
                        workName: null,
                        workAddress: null,
                        workplacePhone: null, //optional
                        field: null, //Bind to db
                        profession: null,
                        startDate: null,
                        salary: null,
                        totalSalary: null
                    },
                    relative: {
                        rel1: {
                            name: null,
                            phone: null,
                            relationship: null,
                        },
                        rel2: {
                            name: null,
                            phone: null,
                            relationship: null,
                        }
                    }
                },
                customers: [
                    {
                        name: 'Lưu Nhật Hồng',
                        id: 0
                    },
                    {
                        name: 'Lưu Nhật Hồng 2',
                        id: 1
                    },
                    {
                        name: 'Lưu Nhật Hồng 3',
                        id: 2
                    }
                ],
                loanPeriods: [
                    6, 12, 18, 24
                ],
                dueDates: [
                    1, 5, 10, 15, 20, 25, 30
                ]
                //registration: {
                //    name: null,
                //    email: null,
                //    street: null,
                //    city: null,
                //    state: null,
                //    numtickets: 0,
                //    shirtsize: 'XL'
                //},
                //sizes: ['S', 'M', 'L', 'XL']
            }
        },
        computed: {
            customerDobDisplay: function () {
                return this.formatDate(this.reg.basic.dob);
            }
        },
        methods: {
            formatDate: function(date) {
                if (!date) return null;
                const [year, month, day] = date.split('-');
                //return `${month}/${day}/${year}`
                return `${day}/${month}/${year}`;
            }
            //parseDate(date) {
            //    if (!date) return null
            //    const [month, day, year] = date.split('/')
            //    return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
            //}
        }
    }
</script>
<style scoped>

</style>