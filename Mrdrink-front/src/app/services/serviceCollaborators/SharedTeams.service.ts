import { Injectable } from '@angular/core'
import { GetInformations } from '../serviceEvent/getInformations.service'
import { Observable } from 'rxjs'
import { map } from 'rxjs'


@Injectable({ providedIn: 'root' })

export class SharedTeams {

    constructor(private getInformations: GetInformations) { }

    getTeamList(): Observable<any[]> {
        return this.getInformations.getTeamNames().pipe(
            map(data => {
                if (data?.findNameTeams?.length) {
                    return data.findNameTeams.map((team: any) => ({
                        name: team.userName.split('.')[0],
                        id: team.id
                    }))
                } else {
                    return []
                }
            })
        )
    }

}