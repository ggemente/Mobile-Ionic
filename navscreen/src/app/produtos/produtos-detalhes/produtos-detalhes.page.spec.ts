import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProdutosDetalhesPage } from './produtos-detalhes.page';

describe('ProdutosDetalhesPage', () => {
  let component: ProdutosDetalhesPage;
  let fixture: ComponentFixture<ProdutosDetalhesPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutosDetalhesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProdutosDetalhesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
