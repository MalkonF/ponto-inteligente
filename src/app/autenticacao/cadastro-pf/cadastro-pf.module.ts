import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastrarPfComponent, CadastroPfComponent } from './components';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [CadastrarPfComponent, CadastroPfComponent],
  imports: [CommonModule, FlexLayoutModule, RouterModule],
})
export class CadastroPfModule {}
