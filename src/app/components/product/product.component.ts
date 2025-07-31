import { Component } from '@angular/core';

@Component({
  selector: 'app-production',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductionComponent {
  casesToProduce = 245;
  casesProduced = 98;
  casesRemaining = 147;
  percentRemaining = 60;

  itemId = '19G530';
  itemName = '5” Flour Tortilla Gordita';
  lotId = '124542';
  casesPerPallet = 48;
  palletsProduced = 2;
  missingLabels = 0;
  currentPalletCases = 2;
  qrCodeRequired = true;

  scheduledThisWeek = 2629;
  producedThisWeek = 1862;
}
