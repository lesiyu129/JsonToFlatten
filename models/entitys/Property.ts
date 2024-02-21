import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { BaseEntity } from "./BaseEntity";
@Entity()
export class Property1 extends BaseEntity {
  @Column()
  key: string;

  @Column({ type: "text" })
  value: string;

  @Column()
  lest_flatten_id: string;

  constructor(
    key: string,
    value: string,
    lest_flatten_id: string,
    is_parent: boolean = false
  ) {
    super(null, is_parent);
    this.key = key;
    this.value = value;
    this.lest_flatten_id = lest_flatten_id;
  }
}
@Entity()
export class Property2 extends BaseEntity {
  @Column()
  key: string;

  @Column({ type: "text" })
  value: string;

  @Column()
  lest_flatten_id: string;

  constructor(
    key: string,
    value: string,
    lest_flatten_id: string,
    is_parent: boolean = false
  ) {
    super(null, is_parent);
    this.key = key;
    this.value = value;
    this.lest_flatten_id = lest_flatten_id;
  }
}
@Entity()
export class Property3 extends BaseEntity {
  @Column()
  key: string;

  @Column({ type: "text" })
  value: string;

  @Column()
  lest_flatten_id: string;

  constructor(
    key: string,
    value: string,
    lest_flatten_id: string,
    is_parent: boolean = false
  ) {
    super(null, is_parent);
    this.key = key;
    this.value = value;
    this.lest_flatten_id = lest_flatten_id;
  }
}
@Entity()
export class Property4 extends BaseEntity {
  @Column()
  key: string;

  @Column({ type: "text" })
  value: string;

  @Column()
  lest_flatten_id: string;

  constructor(
    key: string,
    value: string,
    lest_flatten_id: string,
    is_parent: boolean = false
  ) {
    super(null, is_parent);
    this.key = key;
    this.value = value;
    this.lest_flatten_id = lest_flatten_id;
  }
}
@Entity()
export class Property5 extends BaseEntity {
  @Column()
  key: string;

  @Column({ type: "text" })
  value: string;

  @Column()
  lest_flatten_id: string;

  constructor(
    key: string,
    value: string,
    lest_flatten_id: string,
    is_parent: boolean = false
  ) {
    super(null, is_parent);
    this.key = key;
    this.value = value;
    this.lest_flatten_id = lest_flatten_id;
  }
}
@Entity()
export class Property6 extends BaseEntity {
  @Column()
  key: string;

  @Column({ type: "text" })
  value: string;

  @Column()
  lest_flatten_id: string;

  constructor(
    key: string,
    value: string,
    lest_flatten_id: string,
    is_parent: boolean = false
  ) {
    super(null, is_parent);
    this.key = key;
    this.value = value;
    this.lest_flatten_id = lest_flatten_id;
  }
}
@Entity()
export class Property7 extends BaseEntity {
  @Column()
  key: string;

  @Column({ type: "text" })
  value: string;

  @Column()
  lest_flatten_id: string;

  constructor(
    key: string,
    value: string,
    lest_flatten_id: string,
    is_parent: boolean = false
  ) {
    super(null, is_parent);
    this.key = key;
    this.value = value;
    this.lest_flatten_id = lest_flatten_id;
  }
}
@Entity()
export class Property8 extends BaseEntity {
  @Column()
  key: string;

  @Column({ type: "text" })
  value: string;

  @Column()
  lest_flatten_id: string;

  constructor(
    key: string,
    value: string,
    lest_flatten_id: string,
    is_parent: boolean = false
  ) {
    super(null, is_parent);
    this.key = key;
    this.value = value;
    this.lest_flatten_id = lest_flatten_id;
  }
}
@Entity()
export class Property9 extends BaseEntity {
  @Column()
  key: string;

  @Column({ type: "text" })
  value: string;

  @Column()
  lest_flatten_id: string;

  constructor(
    key: string,
    value: string,
    lest_flatten_id: string,
    is_parent: boolean = false
  ) {
    super(null, is_parent);
    this.key = key;
    this.value = value;
    this.lest_flatten_id = lest_flatten_id;
  }
}
@Entity()
export class Property10 extends BaseEntity {
  @Column()
  key: string;

  @Column({ type: "text" })
  value: string;

  @Column()
  lest_flatten_id: string;

  constructor(
    key: string,
    value: string,
    lest_flatten_id: string,
    is_parent: boolean = false
  ) {
    super(null, is_parent);
    this.key = key;
    this.value = value;
    this.lest_flatten_id = lest_flatten_id;
  }
}
@Entity()
export class Property11 extends BaseEntity {
  @Column()
  key: string;

  @Column({ type: "text" })
  value: string;

  @Column()
  lest_flatten_id: string;

  constructor(
    key: string,
    value: string,
    lest_flatten_id: string,
    is_parent: boolean = false
  ) {
    super(null, is_parent);
    this.key = key;
    this.value = value;
    this.lest_flatten_id = lest_flatten_id;
  }
}
@Entity()
export class Property12 extends BaseEntity {
  @Column()
  key: string;

  @Column({ type: "text" })
  value: string;

  @Column()
  lest_flatten_id: string;

  constructor(
    key: string,
    value: string,
    lest_flatten_id: string,
    is_parent: boolean = false
  ) {
    super(null, is_parent);
    this.key = key;
    this.value = value;
    this.lest_flatten_id = lest_flatten_id;
  }
}
@Entity()
export class Property13 extends BaseEntity {
  @Column()
  key: string;

  @Column({ type: "text" })
  value: string;

  @Column()
  lest_flatten_id: string;

  constructor(
    key: string,
    value: string,
    lest_flatten_id: string,
    is_parent: boolean = false
  ) {
    super(null, is_parent);
    this.key = key;
    this.value = value;
    this.lest_flatten_id = lest_flatten_id;
  }
}
@Entity()
export class Property14 extends BaseEntity {
  @Column()
  key: string;

  @Column({ type: "text" })
  value: string;

  @Column()
  lest_flatten_id: string;

  constructor(
    key: string,
    value: string,
    lest_flatten_id: string,
    is_parent: boolean = false
  ) {
    super(null, is_parent);
    this.key = key;
    this.value = value;
    this.lest_flatten_id = lest_flatten_id;
  }
}
@Entity()
export class Property15 extends BaseEntity {
  @Column()
  key: string;

  @Column({ type: "text" })
  value: string;

  @Column()
  lest_flatten_id: string;

  constructor(
    key: string,
    value: string,
    lest_flatten_id: string,
    is_parent: boolean = false
  ) {
    super(null, is_parent);
    this.key = key;
    this.value = value;
    this.lest_flatten_id = lest_flatten_id;
  }
}
@Entity()
export class Property16 extends BaseEntity {
  @Column()
  key: string;

  @Column({ type: "text" })
  value: string;

  @Column()
  lest_flatten_id: string;

  constructor(
    key: string,
    value: string,
    lest_flatten_id: string,
    is_parent: boolean = false
  ) {
    super(null, is_parent);
    this.key = key;
    this.value = value;
    this.lest_flatten_id = lest_flatten_id;
  }
}
