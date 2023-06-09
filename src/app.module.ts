import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { CorsMiddleware } from '@nest-middlewares/cors';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import { UserModule } from './user/user.module';
import { GraphiqueModule } from './graphique/graphique.module';
import { Graphique } from './graphique/graphique.entity';
import { DonneeGraphModule } from './donneeGraph/donneeGraph.module';
import { DonneeGraph } from './donneeGraph/donneeGraph.entity';
import { SportModule } from './sport/sport.module';
import { ExerciceCourseModule } from './exerciceCourse/exerciceCourse.module';
import { ExerciceEscaladeModule } from './exerciceEscalade/exerciceEscalade.module';
import { ExerciceMusculationController } from './exerciceMusculation/exerciceMusculation.controller';
import { ExerciceMusculationModule } from './exerciceMusculation/exerciceMusculation.module';
import { Seance } from './seance/seance.entity';
import { SeanceModule } from './seance/seance.module';
import { ExerciceMuscu } from './exerciceMusculation/exerciceMuscu.entity';
import { ExerciceEscalade } from './exerciceEscalade/exerciceEscalade.entity';
import { ExerciceCourse } from './exerciceCourse/exerciceCourse.entity';


@Module({
  imports: [TypeOrmModule.forRoot({
    type : 'mysql',
    host : 'n2o93bb1bwmn0zle.chr7pe7iynqr.eu-west-1.rds.amazonaws.com',
    port : 3306,
    username : 'l1ivkbw2rnd92t3d',
    password : 'yhjeh5j9bxamzpsk',
    database : 'md0x73knc9w3c04r',
    entities : [User,Graphique,DonneeGraph,Seance, ExerciceMuscu, ExerciceEscalade, ExerciceCourse],
    synchronize : false,
  }),AppModule,UserModule, GraphiqueModule, DonneeGraphModule, SeanceModule, ExerciceMusculationModule, ExerciceEscaladeModule, ExerciceCourseModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule implements NestModule {
  // Configuration du CORS
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CorsMiddleware).forRoutes('*'); // ICI LE BACK PEUT RECEVOIR DES REQUETES DE PARTOUT
    // QUAND ON AURA UN SERVEUR /NDD, MODIFIER LA LIGNE CI DESSUS PAR :
    // consumer.apply(CorsMiddleware).withOrigins('http://monsite.com').forRoutes('*');
    //CHANGER monsite.com PAR NOTRE URL.
  }
}

