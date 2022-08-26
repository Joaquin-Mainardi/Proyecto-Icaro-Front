import { NgModule } from "@angular/core";
import { MatToolbarModule } from '@angular/material/toolbar'
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';










@NgModule({
    exports:[ MatToolbarModule,
         MatTableModule,
         MatIconModule,
          ReactiveFormsModule,
          MatCardModule,
          MatFormFieldModule,
        MatInputModule,
      MatButtonModule,
    FormsModule,
  MatSnackBarModule],

})

export class MaterialModule {}