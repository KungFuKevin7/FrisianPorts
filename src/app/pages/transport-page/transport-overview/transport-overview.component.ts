import {Component, Input, OnInit} from '@angular/core';
import {GoodsflowService} from "../../../services/dashboard-services/goodsflow.service";
import {GoodsFlowDto} from "../../../models/DTO/GoodsFlowDto";
import {TransportService} from "../../../services/transport.service";

@Component({
  selector: 'app-transport-overview',
  templateUrl: './transport-overview.component.html',
  styleUrls: ['./transport-overview.component.css'],
  providers: [GoodsflowService, TransportService]
})
export class TransportOverviewComponent implements OnInit {
  @Input() cargoTransportId: number = 0;

  goodsFlow: GoodsFlowDto = {
    cargoTransportId: 0,
    frequency: '',
    departureLocation: '',
    arrivalLocation: '',
    totalWeight: 0
  };

  shipAmount!: number;

  constructor(private goodsFlowService: GoodsflowService,
              private transportService: TransportService) {
  }

  //OnInit: Get flow-of-goods along with amount of ships in flow-of-goods.
  ngOnInit(): void {
    this.goodsFlowService.getGoodsFlowById(this.cargoTransportId)
      .subscribe(response => {
        this.goodsFlow = response;
      });

    this.transportService.getCountInCargoTransport(this.cargoTransportId)
      .subscribe(response => {
        this.shipAmount = response;
      });
  }

}
