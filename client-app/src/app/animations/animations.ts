import { trigger, state, style, transition, animate, query, group } from '@angular/animations';


export const Animations = {
    navbarTrigger: trigger('entering', [
        transition(':enter', [
            style({
                'opacity': '0',
                'transform': 'translateY(-100px)'
            }),
            animate(1000, style({
                'opacity': '1',
                'transform': 'translateY(0)'
            }))
        ])
    ]),
    routerNavigation: trigger('navigate', [
        transition('* => *', [
            query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
            group([
                query(':enter', [
                    style({ transform: 'translateX(100%)', opacity: 0 }),
                    animate('1s ease-in-out', style({ transform: 'translateX(0%)', opacity: 1 }))
                ], { optional: true }),
                query(':leave', [
                    style({ transform: 'translateX(0%)' }),
                    animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }))], { optional: true }),
            ])
        ])
    ])
    
}