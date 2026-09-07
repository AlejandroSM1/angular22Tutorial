import { LowerCasePipe, UpperCasePipe, TitleCasePipe, DecimalPipe, SlicePipe, JsonPipe, DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-ex',
  imports: [UpperCasePipe, LowerCasePipe, TitleCasePipe, DecimalPipe, SlicePipe, JsonPipe, DatePipe],
  templateUrl: './pipe-ex.html',
  styleUrl: './pipe-ex.css',
})
export class PipeEx {
  studentName: string = 'alejandro santoyo';

  studentAddress: string = '123 main street, CITY, COUNTRY';

  tuitionCost: number = 1234.5689;

  rollNoList: number[] = [14, 12, 23, 34, 25, 26, 17, 18, 19];

  studentObject: any = {
    name: 'Acid Burn',
    city: 'Los Angeles',
    pinCode: 90001,
  };

  currentDate: Date = new Date();

}
