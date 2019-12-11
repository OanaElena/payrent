import {OnDestroy} from "@angular/core";
import {Subject} from "rxjs";

export class UnsubscribeComponent implements OnDestroy{
  protected unsubscribed  = new Subject();

  public ngOnDestroy(): void {
    this.unsubscribed.next();
    this.unsubscribed.complete();
  }
}
