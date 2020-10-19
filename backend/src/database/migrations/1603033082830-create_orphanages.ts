import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createOrphanages1603033082830 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    //Método que realiza alterações no BD: criar tabela, alterar campo, deletar campo
    await queryRunner.createTable(new Table({
      name: 'orphanages',
      columns: [
        {
          name: 'id',
          type: 'integer',
          unsigned: true,
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment',
        },
        {
          name: 'name',
          type: 'varchar'
        },
        {
          name: 'latitude',
          type: 'decimal',
          scale: 10,
          precision: 2
        },
        {
          name: 'longitude',
          type: 'decimal',
          scale: 10,
          precision: 2
        },
        {
          name: 'about',
          type: 'text',
        },
        {
          name: 'instructions',
          type: 'text',
        },
        {
          name: 'open_on_weekends',
          type: 'boolean',
          default: false
        },
        {
          name: 'opening_hours',
          type: 'varchar',
        },
      ],
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    //Desfaz o que foi feito no método UP
    await queryRunner.dropTable('orphanages');
  }

}
