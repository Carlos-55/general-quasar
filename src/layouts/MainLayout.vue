<template>
  <q-layout view="hHr lpR lFr">
    <q-header class="bg-grey-3 text-black">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" v-if="$q.screen.width > 900"/>
        <q-toolbar-title align="center">
          <div class="q-mt-none text-h5 text-weight-bolder">
                    Colegio Francisto Villa {{$q.screen.width}}
          </div>
          <div class="q-mt-none text-h6 text-weight-bolder text-orange-10">
            {{ auth.namePage }}
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="left" side="left" elevated v-if="$q.screen.width > 900">
      <q-list bordered separator v-if="items && items.length > 0">
        <q-item v-for="(item, i) of items" :to="item.url" clickable v-ripple :key="i">
          <q-item-section avatar v-if="item.icon && item.icon != ''">
            <q-avatar size="sm">
                <img :src="item.icon">
              </q-avatar>
          </q-item-section>
          <q-item-section>{{ item.title }}</q-item-section>
        </q-item>
        <q-item clickable v-ripple @click="logout()" :key="'hola'">
            <q-item-section avatar>
              <q-icon color="orange-10" name="power_settings_new"></q-icon>
            </q-item-section>
            <q-item-section>Cerrar sesion</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <q-page padding>
        <slot></slot>
      </q-page>
    </q-page-container>

    <q-footer v-if="$q.screen.width < 900">
      <q-toolbar class="bg-grey-3">
        <div class="col-12">
          <div class="row  justify-around">
            <div class="col-2 q-ma-md">
              <q-btn :color="auth.namePage === 'Publicaciones' ? 'amber' : 'grey-4'" @click="changueView(1)">
                <q-avatar >
                  <q-img :src="
                    auth.namePage === 'Publicaciones' 
                    ? require('../assets/icons/select/voice.svg') 
                    : require('../assets/icons/not_select/voice_not.svg')"/>
                </q-avatar>
              </q-btn>
            </div>
            <div class="col-2 q-ma-md">
              <q-btn :color="auth.namePage === 'Pagos' ? 'amber' : 'grey-4'" @click="changueView(2)">
                <q-avatar >
                  <q-img :src="
                    auth.namePage === 'Pagos' 
                    ? require('../assets/icons/select/money.svg') 
                    : require('../assets/icons/not_select/money_not.svg')"/>
                </q-avatar>
              </q-btn>
            </div>
            <div class="col-2 q-ma-md">
              <q-btn :color="auth.namePage === 'Calificaciones' ? 'amber' : 'grey-4'" @click="changueView(3)">
                <q-avatar>
                  <q-img :src="
                    auth.namePage === 'Calificaciones' 
                    ? require('../assets/icons/select/education.svg') 
                    : require('../assets/icons/not_select/graduation_not.svg')"/>
                </q-avatar>
              </q-btn>
            </div>
            <div class="col-2 q-ma-md">
              <q-btn :color="auth.namePage === 'Cuenta' ? 'amber' : 'grey-4'" @click="changueView(4)">
                <q-avatar>
                  <q-img :src="
                    auth.namePage === 'Cuenta' 
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
    console.log(this.$q.screen.width);

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

  

  @Watch('$route')
  watchOption(){    
    this.auth.SETBUTTONSELECT(this.$route.path.split('/')[2]) 
  }

  @Watch('$q')
  watchSize(){    
    console.log(this.$q.screen.width);
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
