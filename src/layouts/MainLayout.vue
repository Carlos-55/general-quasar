<template>
  <q-layout view="hHr lpR lFr">
    <q-header class="bg-grey-3 text-black">
      <q-toolbar>
        <q-toolbar-title align="center">
          <div class="q-mt-none text-h5 text-weight-bolder">
                    Colegio Francisto Villa
          </div>
          <div class="q-mt-none text-h6 text-weight-bolder text-orange-10">
            Publicaciones
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <!-- <q-drawer show-if-above v-model="left" side="left" elevated>
      <q-list bordered separator v-if="items && items.length > 0">
        <q-item v-for="(item, i) of items" :to="item.url" clickable v-ripple :key="i">
          <q-item-section>
            <q-item-label>{{ item.title }}</q-item-label>
            <q-item-label v-if="item.description" caption>{{ item.description }}</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple @click="logout()" :key="'hola'">
          <q-item-section>
            <q-item-label>Cerrar sesion</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer> -->

    <q-page-container>
      <q-page padding>
        <slot></slot>
      </q-page>
    </q-page-container>

    <q-footer>
      <q-toolbar class="bg-grey-3">
        <div class="col-12">
          <div class="row  justify-around">
            <div class="col-2 q-ma-md">
              <q-btn :color="auth.buttonSelect === 'publications' ? 'amber' : 'grey-4'" @click="changueView(1)">
                <q-avatar >
                  <q-img :src="
                    auth.buttonSelect === 'publications' 
                    ? require('../assets/icons/select/voice.svg') 
                    : require('../assets/icons/not_select/voice_not.svg')"/>
                </q-avatar>
              </q-btn>
            </div>
            <div class="col-2 q-ma-md">
              <q-btn :color="auth.buttonSelect === 'payments' ? 'amber' : 'grey-4'" @click="changueView(2)">
                <q-avatar >
                  <q-img :src="
                    auth.buttonSelect === 'payments' 
                    ? require('../assets/icons/select/money.svg') 
                    : require('../assets/icons/not_select/money_not.svg')"/>
                </q-avatar>
              </q-btn>
            </div>
            <div class="col-2 q-ma-md">
              <q-btn :color="auth.buttonSelect === 'ratings' ? 'amber' : 'grey-4'" @click="changueView(3)">
                <q-avatar>
                  <q-img :src="
                    auth.buttonSelect === 'ratings' 
                    ? require('../assets/icons/select/education.svg') 
                    : require('../assets/icons/not_select/graduation_not.svg')"/>
                </q-avatar>
              </q-btn>
            </div>
            <div class="col-2 q-ma-md">
              <q-btn :color="auth.buttonSelect === 'account' ? 'amber' : 'grey-4'" @click="changueView(4)">
                <q-avatar>
                  <q-img :src="
                    auth.buttonSelect === 'account' 
                    ? require('../assets/icons/select/gears.svg') 
                    : require('../assets/icons/not_select/gears_not.svg')"/>
                </q-avatar>
              </q-btn>
            </div>

          </div>


        </div>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { APP, ICON } from '../helpers/configs';
import { AuthStoreModule } from '../store/modules/auth';
import { getModule } from 'vuex-module-decorators';
import { GlobalStoreModule } from '../store/modules/global';
import { languages, LanguagesActives } from '../boot/i18n';

@Component
export default class AdminLayout extends Vue {
  menu: boolean = false;
  auth = getModule(AuthStoreModule, this.$store);
  global = getModule(GlobalStoreModule, this.$store);
  app = APP;
  languages = languages;
  icon = ICON;
  left?: boolean = false;
  publications: boolean = true;
  payments: boolean = false;
  ratings: boolean = false
  account: boolean = false;
  stage: string = "";
  stage_open: string = '';

  @Prop({ type: Array, required: false }) items!: Array<any>;

  created() {
    this.global.setLanguage(this.global.lang);
  }


  async changueView(value: any) {
    switch (value) {
      case 1:
        this.auth.SETBUTTONSELECT('publications')
        this.$router.push('/admin/publication')           
        break;
      case 2:
        this.auth.SETBUTTONSELECT('payments')
        this.$router.push('/admin/payment')      
        break;
      case 3:
        this.auth.SETBUTTONSELECT('ratings')
        this.$router.push('/admin/gears')      
        break;
      case 4:
        this.auth.SETBUTTONSELECT('account') 
        this.$router.push('/admin/raiting')       
        break;
    
      default:
        this.auth.SETBUTTONSELECT('')
        break;
    }
  }

  @Watch('auth.buttonSelect')
  watchOption(){    
  }

  logout() {
    this.auth.logout();
    // @ts-ignore
    this.$router.push('/');
  }
  changeLang(lang: LanguagesActives) {
    this.global.setLanguage(lang);
  }
}
</script>

<style lang="scss" scope></style>
