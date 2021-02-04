<template>
<div id="Index">
    <div class="q-pa-md">

        <div class="row">
            <div class="col-12 col-md-7" id="receta">
				<canvas id="canvas" ref="canvas" height="250" width="600" class="canvas"/>
			</div>
            <div class="col-12 col-md-7" id="recetaControlada">
				<canvas id="recipeController" ref="recipeController" height="430" width="600" class="canvas"/>
			</div>
        </div>
		<div class="row">
			<div class="col-3">
				<q-btn rounded icon-right="print" label="Receta" @click="printRecipe('canvas')" color="primary" no-caps></q-btn>
			</div>
			<div class="col-3">
				<q-btn rounded icon-right="print" label="Receta controlada" @click="printRecipeController('recipeController')" color="primary" no-caps></q-btn>
			</div>
		</div>
    </div>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { fabric } from "fabric";
import { getModule } from 'vuex-module-decorators';
import { UserStoreModule } from '../../store/modules/user';
import { IUser } from '../../models/user';
import { AuthStoreModule } from '../../store/modules/auth';
import { printDiv } from 'src/helpers/helpers';
@Component
export default class Index extends Vue {
    userStore = getModule(UserStoreModule, this.$store);
	authStore = getModule(AuthStoreModule, this.$store);
	user : IUser =  {};
	canvas: any;
    controller: any;
    
	async mounted() {
        this.user =  Object.assign({}, this.userStore.selectedUser);
		
        const ref = this.$refs.canvas as HTMLCanvasElement;
        this.canvas = new fabric.Canvas(ref);
        const controllerRecip = this.$refs.recipeController as HTMLCanvasElement;
        this.controller = new fabric.Canvas(controllerRecip);
        this.recipe();
        this.controllerRecipePatient();
    }

    async recipe() {
        let texto = `Paciente \n`;
		let nombre = 'this.authStore.userLogged.user';
		// let newtext = texto.set({fill: 'red'});
		// let complete = `${newtext} ${nombre}`
        let instrucciones = `Instrucciones \n \n Instrucciones para el paciente`;
        let Diagnostico = `Diagnostico \n \n diagnostico del paciente`;
        let Medicmentos = `Medicamentos \n \n Medicamentos para el paciente`;
        let direccion = `Direccion \n \n Direccion del paciente`;
        let dieta = `Dieta \n \n Dieta del paciente`;

        const titleName = new fabric.Textbox(`Paciente \n \n ${nombre}`, {
            fontFamily: 'Arial',
            fontSize: 12,
            height: 10,
            width: 250,
            left: 5,
			  styles: {
				0: {
					0: { fill: "#C3C3C3", fontSize: 18 },
					1: { fill: "#C3C3C3", fontSize: 18 },
					2: { fill: "#C3C3C3", fontSize: 18 },
					3: { fill: "#C3C3C3", fontSize: 18 },
					4: { fill: "#C3C3C3", fontSize: 18 },
					5: { fill: "#C3C3C3", fontSize: 18 },
					6: { fill: "#C3C3C3", fontSize: 18 },
					7: { fill: "#C3C3C3", fontSize: 18 },
				}
			}
        });
        const instruc = new fabric.Textbox(instrucciones, {
            fontFamily: 'Arial',
            fontSize: 12,
            height: 10,
            width: 250,
            top: 80,
            left: 5,
			  styles: {
				0: {
					0: { fill: "#C3C3C3", fontSize: 18 },
					1: { fill: "#C3C3C3", fontSize: 18 },
					2: { fill: "#C3C3C3", fontSize: 18 },
					3: { fill: "#C3C3C3", fontSize: 18 },
					4: { fill: "#C3C3C3", fontSize: 18 },
					5: { fill: "#C3C3C3", fontSize: 18 },
					6: { fill: "#C3C3C3", fontSize: 18 },
					7: { fill: "#C3C3C3", fontSize: 18 },
					8: { fill: "#C3C3C3", fontSize: 18 },
					9: { fill: "#C3C3C3", fontSize: 18 },
					10: { fill: "#C3C3C3", fontSize: 18 },
					11: { fill: "#C3C3C3", fontSize: 18 },
					12: { fill: "#C3C3C3", fontSize: 18 },
				}
			}
        });
        const diet = new fabric.Textbox(dieta, {
            fontFamily: 'Arial',
            fontSize: 12,
            height: 10,
            width: 250,
            top: 170,
            left: 5,
			  styles: {
				0: {
					0: { fill: "#C3C3C3", fontSize: 18 },
					1: { fill: "#C3C3C3", fontSize: 18 },
					2: { fill: "#C3C3C3", fontSize: 18 },
					3: { fill: "#C3C3C3", fontSize: 18 },
					4: { fill: "#C3C3C3", fontSize: 18 },
				}
			}
        });
        const medicamentos = new fabric.Textbox(Medicmentos, {
            fontFamily: 'Arial',
            fontSize: 12,
            height: 10,
            width: 250,
            // top: 0,
            left: 400,
			  styles: {
				0: {
					0: { fill: "#C3C3C3", fontSize: 18 },
					1: { fill: "#C3C3C3", fontSize: 18 },
					2: { fill: "#C3C3C3", fontSize: 18 },
					3: { fill: "#C3C3C3", fontSize: 18 },
					4: { fill: "#C3C3C3", fontSize: 18 },
					5: { fill: "#C3C3C3", fontSize: 18 },
					6: { fill: "#C3C3C3", fontSize: 18 },
					7: { fill: "#C3C3C3", fontSize: 18 },
					8: { fill: "#C3C3C3", fontSize: 18 },
					9: { fill: "#C3C3C3", fontSize: 18 },
					10: { fill: "#C3C3C3", fontSize: 18 },
					11: { fill: "#C3C3C3", fontSize: 18 },
				}
			}
        });

        this.canvas.add(titleName);
        this.canvas.add(instruc);
        this.canvas.add(diet);
        this.canvas.add(medicamentos);
    }

    async controllerRecipePatient() {
        let texto = `Paciente \n \n oa`;
        let direccion = `Direccion \n \n Direccion del paciente`;
        let Diagnostico = `Diagnostico \n \n Diagnostico del paciente`;
        let instrucciones = `Instrucciones \n \n Instrucciones de uso para el paciente`;
        let dieta = `Dieta \n \n Dieta del paciente`;
        let Medicmentos = `Medicamentos \n \n Medicamentos del paciente`;


        const patientName = new fabric.Textbox(texto, {
            fontFamily: 'Arial',
            fontSize: 12,
            height: 10,
            width: 250,
            // top: 250,
            left: 5,
			  styles: {
				0: {
					0: { fill: "#C3C3C3", fontSize: 18 },
					1: { fill: "#C3C3C3", fontSize: 18 },
					2: { fill: "#C3C3C3", fontSize: 18 },
					3: { fill: "#C3C3C3", fontSize: 18 },
					4: { fill: "#C3C3C3", fontSize: 18 },
					5: { fill: "#C3C3C3", fontSize: 18 },
					6: { fill: "#C3C3C3", fontSize: 18 },
					7: { fill: "#C3C3C3", fontSize: 18 },
			}
			}
			
        });
		const address = new fabric.Textbox(direccion, {
            fontFamily: 'Arial',
            fontSize: 12,
            height: 10,
            width: 250,
            top: 80,
            left: 5,
			  styles: {
				0: {
					0: { fill: "#C3C3C3", fontSize: 18 },
					1: { fill: "#C3C3C3", fontSize: 18 },
					2: { fill: "#C3C3C3", fontSize: 18 },
					3: { fill: "#C3C3C3", fontSize: 18 },
					4: { fill: "#C3C3C3", fontSize: 18 },
					5: { fill: "#C3C3C3", fontSize: 18 },
					6: { fill: "#C3C3C3", fontSize: 18 },
					7: { fill: "#C3C3C3", fontSize: 18 },
					8: { fill: "#C3C3C3", fontSize: 18 },
				}
			}
        });
		const diagnostic = new fabric.Textbox(Diagnostico, {
            fontFamily: 'Arial',
            fontSize: 12,
 			height: 10,
            width: 250,
            top: 170,
            left: 5,
			  styles: {
				0: {
					0: { fill: "#C3C3C3", fontSize: 18 },
					1: { fill: "#C3C3C3", fontSize: 18 },
					2: { fill: "#C3C3C3", fontSize: 18 },
					3: { fill: "#C3C3C3", fontSize: 18 },
					4: { fill: "#C3C3C3", fontSize: 18 },
					5: { fill: "#C3C3C3", fontSize: 18 },
					6: { fill: "#C3C3C3", fontSize: 18 },
					7: { fill: "#C3C3C3", fontSize: 18 },
					8: { fill: "#C3C3C3", fontSize: 18 },
					9: { fill: "#C3C3C3", fontSize: 18 },
					10: { fill: "#C3C3C3", fontSize: 18 },
				}
			}
        });

        const instruc = new fabric.Textbox(instrucciones, {
            fontFamily: 'Arial',
            fontSize: 12,
            height: 10,
            width: 250,
            top: 250,
            left: 5,
			  styles: {
				0: {
					0: { fill: "#C3C3C3", fontSize: 18 },
					1: { fill: "#C3C3C3", fontSize: 18 },
					2: { fill: "#C3C3C3", fontSize: 18 },
					3: { fill: "#C3C3C3", fontSize: 18 },
					4: { fill: "#C3C3C3", fontSize: 18 },
					5: { fill: "#C3C3C3", fontSize: 18 },
					6: { fill: "#C3C3C3", fontSize: 18 },
					7: { fill: "#C3C3C3", fontSize: 18 },
					8: { fill: "#C3C3C3", fontSize: 18 },
					9: { fill: "#C3C3C3", fontSize: 18 },
					10: { fill: "#C3C3C3", fontSize: 18 },
					11: { fill: "#C3C3C3", fontSize: 18 },
					12: { fill: "#C3C3C3", fontSize: 18 },
				}
			}
        });
        const diet = new fabric.Textbox(dieta, {
            fontFamily: 'Arial',
            fontSize: 12,
            height: 10,
            width: 250,
            top: 350,
            left: 5,
			  styles: {
				0: {
					0: { fill: "#C3C3C3", fontSize: 18 },
					1: { fill: "#C3C3C3", fontSize: 18 },
					2: { fill: "#C3C3C3", fontSize: 18 },
					3: { fill: "#C3C3C3", fontSize: 18 },
					4: { fill: "#C3C3C3", fontSize: 18 },
					5: { fill: "#C3C3C3", fontSize: 18 },
					6: { fill: "#C3C3C3", fontSize: 18 },
					7: { fill: "#C3C3C3", fontSize: 18 },
				}
			}
        });
        const medicamentos = new fabric.Textbox(Medicmentos, {
            fontFamily: 'Arial',
            fontSize: 12,
            height: 10,
            width: 250,
            // top: 0,
            left: 400,
			  styles: {
				0: {
					0: { fill: "#C3C3C3", fontSize: 18 },
					1: { fill: "#C3C3C3", fontSize: 18 },
					2: { fill: "#C3C3C3", fontSize: 18 },
					3: { fill: "#C3C3C3", fontSize: 18 },
					4: { fill: "#C3C3C3", fontSize: 18 },
					5: { fill: "#C3C3C3", fontSize: 18 },
					6: { fill: "#C3C3C3", fontSize: 18 },
					7: { fill: "#C3C3C3", fontSize: 18 },
					8: { fill: "#C3C3C3", fontSize: 18 },
					9: { fill: "#C3C3C3", fontSize: 18 },
					10: { fill: "#C3C3C3", fontSize: 18 },
					11: { fill: "#C3C3C3", fontSize: 18 },
				}
			}
        });

        this.controller.add(patientName);
        this.controller.add(address);
		this.controller.add(diagnostic);
        this.controller.add(instruc);
        this.controller.add(diet);
        this.controller.add(medicamentos);
    }

	printRecipe(recipe: string){
		console.log(recipe);
		
		printDiv(recipe);
	}
	printRecipeController(recipeController: string){
		printDiv(recipeController);
	}

}
</script>

<style lang="sass" scoped>
.canvas 
  padding: 1.5%;
  width: 100%;
  margin: 0 auto;
  display: block;
  border: 1px solid #d9d9d9;


.row > div
  padding: 10px 15px
.row + .row
  margin-top: 1rem
</style>
