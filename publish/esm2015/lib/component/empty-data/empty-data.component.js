/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class EmptyDataComponent {
    constructor() {
        this.data = [];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
EmptyDataComponent.decorators = [
    { type: Component, args: [{
                selector: 'tt-empty-data',
                template: `
    <div *ngIf="(data || [] ).length === 0 || data === undefined || data === null" class="empty-data-box">
      <div class="mb-empty-data">
        <img
          src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNjRweCIgaGVpZ2h0PSI0MXB4IiB2aWV3Qm94PSIwIDAgNjQgNDEiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjUgKDY3NDY5KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDxnIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00NzIuMDAwMDAwLCAtMTMzNS4wMDAwMDApIj4KICAgICAgICAgICAgPGcgIHRyYW5zZm9ybT0idHJhbnNsYXRlKDY0LjAwMDAwMCwgMTExNC4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnICB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MC4wMDAwMDAsIDc4LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxnICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzNjguMDAwMDAwLCAxNDQuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxnID4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxlbGxpcHNlICBmaWxsPSIjRjVGNUY1IiBjeD0iMzIiIGN5PSIzMyIgcng9IjMyIiByeT0iNyI+PC9lbGxpcHNlPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5LjAwMDAwMCwgMC4wMDAwMDApIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0iI0Q5RDlEOSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTQ2LDEyLjc2MDU2MDQgTDM1Ljg1NDMwNDcsMS4yNTczOTYzMyBDMzUuMzY3NDQxNCwwLjQ3MzgyNjYwNSAzNC42NTU4Nzg5LDAgMzMuOTA2NzYxNywwIEwxMi4wOTMyMzgzLDAgQzExLjM0NDEyMTEsMCAxMC42MzI1NTg2LDAuNDczOTUwMjU1IDEwLjE0NTY5NTMsMS4yNTczOTYzMyBMMi42MTQ3OTcyN2UtMTIsMTIuNzYwNTYwNCBMMCwyMiBMNDYsMjIgTDQ2LDEyLjc2MDU2MDQgWiIgID48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTMyLjYxMzI4MTMsMTUuOTMxNSBDMzIuNjEzMjgxMywxNC4zMjU4NTExIDMzLjYwNjk1MzEsMTMuMDAwMjM0IDM0LjgzOTY5OTIsMTMgTDQ2LDEzIEw0NiwzMS4xMzcxMjc3IEM0NiwzMy4yNTg5NTc0IDQ0LjY3OTM4NjcsMzUgNDMuMDUwNDI5NywzNSBMMi45NDk1NzAzMSwzNSBDMS4zMjA1MjM0NCwzNSAwLDMzLjI1ODg0MDQgMCwzMS4xMzcxMjc3IEwwLDEzIEwxMS4xNjAzMDA4LDEzIEMxMi4zOTMwNDY5LDEzIDEzLjM4NjcxODgsMTQuMzIyODA4NSAxMy4zODY3MTg4LDE1LjkyODQ1NzQgTDEzLjM4NjcxODgsMTUuOTQ5NjM4MyBDMTMuMzg2NzE4OCwxNy41NTUyODcyIDE0LjM5MTcxMDksMTguODUxMTgwOSAxNS42MjQ0NTcsMTguODUxMTgwOSBMMzAuMzc1NTQzLDE4Ljg1MTE4MDkgQzMxLjYwODI4OTEsMTguODUxMTgwOSAzMi42MTMyODEzLDE3LjU0MzM1MTEgMzIuNjEzMjgxMywxNS45Mzc3MDIxIEwzMi42MTMyODEzLDE1LjkzMTUgWiIgIGZpbGw9IiNGQUZBRkEiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"
          alt="empty" class="ng-star-inserted">
      </div>
      <div>
        <p class="empty-description">
          <tt-i18n [t]="'Message.no_data'"></tt-i18n>
        </p>
      </div>
    </div>`,
                styles: [":host .mb-empty-data{width:100%;font-size:14px;line-height:22px;text-align:center}:host .empty-description{text-align:center;color:rgba(0,0,0,.45)}:host .empty-data-box{margin:32px 0}"]
            }] }
];
/** @nocollapse */
EmptyDataComponent.ctorParameters = () => [];
EmptyDataComponent.propDecorators = {
    data: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    EmptyDataComponent.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1wdHktZGF0YS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy10dC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnQvZW1wdHktZGF0YS9lbXB0eS1kYXRhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUEyQixTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBbUJsRixNQUFNLE9BQU8sa0JBQWtCO0lBRTdCO1FBR1MsU0FBSSxHQUFHLEVBQUUsQ0FBQztJQUZuQixDQUFDOzs7O0lBSUQsUUFBUTtJQUNSLENBQUM7OztZQXpCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7O1dBWUQ7O2FBRVY7Ozs7O21CQU1FLEtBQUs7Ozs7SUFBTixrQ0FBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3R0LWVtcHR5LWRhdGEnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgKm5nSWY9XCIoZGF0YSB8fCBbXSApLmxlbmd0aCA9PT0gMCB8fCBkYXRhID09PSB1bmRlZmluZWQgfHwgZGF0YSA9PT0gbnVsbFwiIGNsYXNzPVwiZW1wdHktZGF0YS1ib3hcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJtYi1lbXB0eS1kYXRhXCI+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBzcmM9XCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlWVlJHTFRnaVB6NEtQSE4yWnlCM2FXUjBhRDBpTmpSd2VDSWdhR1ZwWjJoMFBTSTBNWEI0SWlCMmFXVjNRbTk0UFNJd0lEQWdOalFnTkRFaUlIWmxjbk5wYjI0OUlqRXVNU0lnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JaUI0Yld4dWN6cDRiR2x1YXowaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1UazVPUzk0YkdsdWF5SStDaUFnSUNBOElTMHRJRWRsYm1WeVlYUnZjam9nVTJ0bGRHTm9JRFV5TGpVZ0tEWTNORFk1S1NBdElHaDBkSEE2THk5M2QzY3VZbTlvWlcxcFlXNWpiMlJwYm1jdVkyOXRMM05yWlhSamFDQXRMVDRLSUNBZ0lEeG5JSE4wY205clpUMGlibTl1WlNJZ2MzUnliMnRsTFhkcFpIUm9QU0l4SWlCbWFXeHNQU0p1YjI1bElpQm1hV3hzTFhKMWJHVTlJbVYyWlc1dlpHUWlQZ29nSUNBZ0lDQWdJRHhuSUhSeVlXNXpabTl5YlQwaWRISmhibk5zWVhSbEtDMDBOekl1TURBd01EQXdMQ0F0TVRNek5TNHdNREF3TURBcElqNEtJQ0FnSUNBZ0lDQWdJQ0FnUEdjZ0lIUnlZVzV6Wm05eWJUMGlkSEpoYm5Oc1lYUmxLRFkwTGpBd01EQXdNQ3dnTVRFeE5DNHdNREF3TURBcElqNEtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEeG5JQ0IwY21GdWMyWnZjbTA5SW5SeVlXNXpiR0YwWlNnME1DNHdNREF3TURBc0lEYzRMakF3TURBd01Da2lQZ29nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4bklDQjBjbUZ1YzJadmNtMDlJblJ5WVc1emJHRjBaU2d6TmpndU1EQXdNREF3TENBeE5EUXVNREF3TURBd0tTSStDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEeG5JRDRLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4bGJHeHBjSE5sSUNCbWFXeHNQU0lqUmpWR05VWTFJaUJqZUQwaU16SWlJR041UFNJek15SWdjbmc5SWpNeUlpQnllVDBpTnlJK1BDOWxiR3hwY0hObFBnb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQR2NnSUNCMGNtRnVjMlp2Y20wOUluUnlZVzV6YkdGMFpTZzVMakF3TURBd01Dd2dNQzR3TURBd01EQXBJaUJtYVd4c0xYSjFiR1U5SW01dmJucGxjbThpSUhOMGNtOXJaVDBpSTBRNVJEbEVPU0krQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQSEJoZEdnZ1pEMGlUVFEyTERFeUxqYzJNRFUyTURRZ1RETTFMamcxTkRNd05EY3NNUzR5TlRjek9UWXpNeUJETXpVdU16WTNORFF4TkN3d0xqUTNNemd5TmpZd05TQXpOQzQyTlRVNE56ZzVMREFnTXpNdU9UQTJOell4Tnl3d0lFd3hNaTR3T1RNeU16Z3pMREFnUXpFeExqTTBOREV5TVRFc01DQXhNQzQyTXpJMU5UZzJMREF1TkRjek9UVXdNalUxSURFd0xqRTBOVFk1TlRNc01TNHlOVGN6T1RZek15Qk1NaTQyTVRRM09UY3lOMlV0TVRJc01USXVOell3TlRZd05DQk1NQ3d5TWlCTU5EWXNNaklnVERRMkxERXlMamMyTURVMk1EUWdXaUlnSUQ0OEwzQmhkR2crQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQSEJoZEdnZ1pEMGlUVE15TGpZeE16STRNVE1zTVRVdU9UTXhOU0JETXpJdU5qRXpNamd4TXl3eE5DNHpNalU0TlRFeElETXpMall3TmprMU16RXNNVE11TURBd01qTTBJRE0wTGpnek9UWTVPVElzTVRNZ1REUTJMREV6SUV3ME5pd3pNUzR4TXpjeE1qYzNJRU0wTml3ek15NHlOVGc1TlRjMElEUTBMalkzT1RNNE5qY3NNelVnTkRNdU1EVXdOREk1Tnl3ek5TQk1NaTQ1TkRrMU56QXpNU3d6TlNCRE1TNHpNakExTWpNME5Dd3pOU0F3TERNekxqSTFPRGcwTURRZ01Dd3pNUzR4TXpjeE1qYzNJRXd3TERFeklFd3hNUzR4TmpBek1EQTRMREV6SUVNeE1pNHpPVE13TkRZNUxERXpJREV6TGpNNE5qY3hPRGdzTVRRdU16SXlPREE0TlNBeE15NHpPRFkzTVRnNExERTFMamt5T0RRMU56UWdUREV6TGpNNE5qY3hPRGdzTVRVdU9UUTVOak00TXlCRE1UTXVNemcyTnpFNE9Dd3hOeTQxTlRVeU9EY3lJREUwTGpNNU1UY3hNRGtzTVRndU9EVXhNVGd3T1NBeE5TNDJNalEwTlRjc01UZ3VPRFV4TVRnd09TQk1NekF1TXpjMU5UUXpMREU0TGpnMU1URTRNRGtnUXpNeExqWXdPREk0T1RFc01UZ3VPRFV4TVRnd09TQXpNaTQyTVRNeU9ERXpMREUzTGpVME16TTFNVEVnTXpJdU5qRXpNamd4TXl3eE5TNDVNemMzTURJeElFd3pNaTQyTVRNeU9ERXpMREUxTGprek1UVWdXaUlnSUdacGJHdzlJaU5HUVVaQlJrRWlQand2Y0dGMGFENEtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHd2Wno0S0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEM5blBnb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHd2Wno0S0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR3dlp6NEtJQ0FnSUNBZ0lDQWdJQ0FnUEM5blBnb2dJQ0FnSUNBZ0lEd3ZaejRLSUNBZ0lEd3ZaejRLUEM5emRtYytcIlxuICAgICAgICAgIGFsdD1cImVtcHR5XCIgY2xhc3M9XCJuZy1zdGFyLWluc2VydGVkXCI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxwIGNsYXNzPVwiZW1wdHktZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICA8dHQtaTE4biBbdF09XCInTWVzc2FnZS5ub19kYXRhJ1wiPjwvdHQtaTE4bj5cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+YCxcbiAgc3R5bGVVcmxzOiBbJy4vZW1wdHktZGF0YS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEVtcHR5RGF0YUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBASW5wdXQoKSBkYXRhID0gW107XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxufVxuIl19