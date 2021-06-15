import {ComponentFixture, TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {FactoriesComponent} from './factories.component';

describe('FactoriesComponent', () => {
  let component: FactoriesComponent;
  let fixture: ComponentFixture<FactoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [FactoriesComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FactoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#addNextFactories() should toggle #loading', () => {
    expect(component.loading).toBe(false, 'no loading');
    component.addNextFactories();
    expect(component.loading).toBe(true, 'loading');
  });
});
