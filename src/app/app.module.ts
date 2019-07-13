import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AngularFontAwesomeModule } from "angular-font-awesome";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from "ngx-toastr";

import { AppComponent } from "./app.component";
import { ListComponent } from "./list/list.component";
import { ListItemComponent } from "./list/list-item/list-item.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppComponent, ListComponent, ListItemComponent],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    AngularFontAwesomeModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
