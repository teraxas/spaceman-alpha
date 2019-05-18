import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PlayerLoginInfo, Player } from '../../spaceman-api/model';
import { PlayerService } from '../../spaceman-api';

const loginValidator = () => [Validators.required]; // , Validators.minLength(5), Validators.maxLength(100)];

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private playerService: PlayerService,
  ) { }

  ngOnInit() {
    this.form = this.initForm();
  }

  async submit() {
    if (this.form.invalid) {
      return;
    }

    const value = <PlayerLoginInfo>this.form.value;
    const player = await this.playerService.authenticate(value).toPromise();
    // .then(this.onLogin.bind(this));
    this.onLogin(player);
  }

  private onLogin(player: Player) {
    console.log(`Logged in as ${player.username}`);
  }

  private initForm(): FormGroup {
    return this.fb
      .group({
        username: [undefined, loginValidator()],
        password: [undefined, loginValidator()],
      });
  }
}
